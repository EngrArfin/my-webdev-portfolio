"use client";

import Link from "next/link";
import login from "../../UI/img/arfin.jpeg";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import GoogleGithubLogin from "@/components/Shared/GoogleGithubLogin";
import { Suspense } from "react";
import Image from "next/image";

export type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent router={router} />
    </Suspense>
  );
};

interface LoginContentProps {
  router: ReturnType<typeof useRouter>;
}

const LoginContent = ({ router }: LoginContentProps) => {
  const searchParams = useSearchParams();
  const path = searchParams?.get("redirect");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path || "/admin",
    });

    if (resp?.status === 200) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 py-14 px-12 sm:px-8 lg:px-10">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          <span className="text-gray-600">Login in Portfolio</span>
        </h2>
        <div className="flex gap-6">
          <div className="hidden lg:block w-1/2">
            <Image
              src={login}
              width={900}
              height={200}
              alt="login page"
              className="rounded-md object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <form onSubmit={handleLogin} className="space-y-6">
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
                <Link
                  href="/forget-password"
                  className="block text-sm font-medium text-gray-900"
                >
                  Forget Password
                </Link>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gray-800 text-white font-semibold rounded-lg shadow-lg  focus:outline-none focus:ring-4 transition duration-200 ease-in-out transform hover:scale-105"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="text-center mt-4 text-sm text-gray-600">
              Do not have an account?{" "}
              <Link href="/signup" className="text-gray-800 hover:underline">
                Sign Up
              </Link>
            </p>

            <div className="text-center mt-6 text-gray-500 divider">Or</div>
            <GoogleGithubLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
