"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import blog1 from "../../UI/img/blog1.jpg";
import blog2 from "../../UI/img/blog2.jpg";
import blog3 from "../../UI/img/blog3.jpg";
import blog4 from "../../UI/img/blog4.jpg";
import blog5 from "../../UI/img/blog5.jpg";
import blog6 from "../../UI/img/blog6.jpg";

import { StaticImageData } from "next/image";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: StaticImageData; // Changed type from string to StaticImageData
}

const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable Web Apps with MERN Stack",
    excerpt:
      "In this post, I dive into how to build a scalable web application using the MERN stack...",
    date: "2024-11-15",
    slug: "building-scalable-web-apps-with-mern-stack",
    image: blog1,
  },
  {
    id: 2,
    title: "Understanding JWT and Authentication in Node.js",
    excerpt:
      "Learn how to implement secure user authentication using JSON Web Tokens (JWT) in Node.js...",
    date: "2024-11-10",
    slug: "understanding-jwt-and-authentication-in-nodejs",
    image: blog2,
  },
  {
    id: 3,
    title: "React Best Practices for Performance Optimization",
    excerpt:
      "Explore various performance optimization techniques in React to make your applications faster...",
    date: "2024-11-05",
    slug: "react-best-practices-for-performance-optimization",
    image: blog3,
  },
  {
    id: 4,
    title: "Managing State with Redux Toolkit",
    excerpt:
      "Discover how Redux Toolkit simplifies state management in React applications...",
    date: "2024-11-01",
    slug: "managing-state-with-redux-toolkit",
    image: blog4,
  },
  {
    id: 5,
    title: "Building a Next.js E-commerce Application",
    excerpt:
      "Learn the basics of creating a full-stack e-commerce application using Next.js...",
    date: "2024-10-25",
    slug: "building-a-nextjs-ecommerce-application",
    image: blog5,
  },
  {
    id: 6,
    title: "Understanding TypeScript for React Developers",
    excerpt:
      "Explore how TypeScript enhances React development with type safety and better tooling...",
    date: "2024-10-20",
    slug: "understanding-typescript-for-react-developers",
    image: blog6,
  },
];

const Blogs: React.FC = () => {
  const [posts] = useState<BlogPost[]>(samplePosts);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl text-yellow-400 font-bold mb-8 text-center">
          My Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                layout="responsive"
                width={500}
                height={300}
              />
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-yellow-400">
                  {post.title}
                </h2>
                <p className="text-gray-300">{post.excerpt}</p>
                <p className="text-sm text-gray-100">
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
