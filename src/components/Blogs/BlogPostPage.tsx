import { useRouter } from "next/router";

// Type definitions for blog post data
interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
}

// Sample blog posts data (for demonstration purposes)
const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable Web Apps with MERN Stack",
    content:
      "In this post, I dive into how to build a scalable web application using the MERN stack...",
    date: "2024-11-15",
  },
  {
    id: 2,
    title: "Understanding JWT and Authentication in Node.js",
    content:
      "Learn how to implement secure user authentication using JSON Web Tokens (JWT) in Node.js...",
    date: "2024-11-10",
  },
  {
    id: 3,
    title: "React Best Practices for Performance Optimization",
    content:
      "Explore various performance optimization techniques in React to make your applications faster...",
    date: "2024-11-05",
  },
];

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-900 to-black text-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <div className="prose text-gray-300">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  // Generate paths for each blog post using the slug
  const paths = samplePosts.map((post) => ({
    params: { slug: post.title.toLowerCase().replace(/\s+/g, "-") },
  }));

  return {
    paths,
    fallback: true, // Will show loading state if the page is being generated
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  // Find the post based on the slug from samplePosts
  const post = samplePosts.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
};

export default BlogPostPage;
