"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable Web Apps with MERN Stack",
    excerpt:
      "In this post, I dive into how to build a scalable web application using the MERN stack...",
    date: "2024-11-15",
    slug: "building-scalable-web-apps-with-mern-stack",
  },
  {
    id: 2,
    title: "Understanding JWT and Authentication in Node.js",
    excerpt:
      "Learn how to implement secure user authentication using JSON Web Tokens (JWT) in Node.js...",
    date: "2024-11-10",
    slug: "understanding-jwt-and-authentication-in-nodejs",
  },
  {
    id: 3,
    title: "React Best Practices for Performance Optimization",
    excerpt:
      "Explore various performance optimization techniques in React to make your applications faster...",
    date: "2024-11-05",
    slug: "react-best-practices-for-performance-optimization",
  },
  {
    id: 4,
    title: "React Best Practices for Performance Optimization",
    excerpt:
      "Explore various performance optimization techniques in React to make your applications faster...",
    date: "2024-11-05",
    slug: "react-best-practices-for-performance-optimization",
  },
  {
    id: 5,
    title: "React Best Practices for Performance Optimization",
    excerpt:
      "Explore various performance optimization techniques in React to make your applications faster...",
    date: "2024-11-05",
    slug: "react-best-practices-for-performance-optimization",
  },
  {
    id: 6,
    title: "React Best Practices for Performance Optimization",
    excerpt:
      "Explore various performance optimization techniques in React to make your applications faster...",
    date: "2024-11-05",
    slug: "react-best-practices-for-performance-optimization",
  },
];

const Blogs: React.FC = () => {
  const [posts] = useState<BlogPost[]>(samplePosts);

  useEffect(() => {
    // You can replace this with fetching data from an API or your backend
    // Example: fetch("/api/blogs").then((res) => res.json()).then((data) => setPosts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-sky-900 to-gray-800 text-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl text-yellow-400 font-bold mb-8 text-center">
          My Blog
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-red-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-yellow-400">
                  {post.title}
                </h2>
                <p className="text-gray-300">{post.excerpt}</p>
                <p className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <p className="text-yellow-500 hover:underline">Read More</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
