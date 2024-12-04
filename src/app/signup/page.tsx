/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import login from "../../UI/img/arfin.jpeg";
import GoogleGithubLogin from "@/components/Shared/GoogleGithubLogin";

const SignUp = () => {
  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };

    const newUser = {
      name: target.name.value,
      email: target.email.value,
      password: target.password.value,
    };

    const resp = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });

    if (resp.status === 200) {
      target.reset();
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="max-h-screen flex items-center justify-center bg-gray-100 py-14 px-12 sm:px-8 lg:px-10">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
            <span className="text-sky-600">Sign Up Portfolio</span>
          </h2>
          <div className="flex gap-6">
            <div className="hidden lg:block w-1/2">
              <Image
                src={login}
                width={600}
                height={300}
                alt="sign up page"
                className="rounded-md object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <form onSubmit={handleSignUp} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="User Name"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-900 to-sky-600 text-white font-semibold rounded-lg shadow-lg hover:from-sky-900 hover:to-sky-900 focus:outline-none focus:ring-4 focus:ring-sky-500 transition duration-200 ease-in-out transform hover:scale-105"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <p className="text-center mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-sky-600 hover:underline">
                  Login
                </Link>
              </p>
              <div className="text-center mt-6 text-gray-500 divider">Or</div>
              <div className="flex justify-center gap-4 mt-4">
                <GoogleGithubLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default SignUp;
