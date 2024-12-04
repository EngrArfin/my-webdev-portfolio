"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const GoogleGithubLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { status } = useSession();

  const path = searchParams.get("redirect") || "/admin";

  const handleSocialLogin = async (provider: string) => {
    const response = await signIn(provider, {
      redirect: false,
      callbackUrl: path,
    });
    if (response?.ok) {
      router.push(path);
    } else {
      console.error("Social login failed", response?.error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push(path);
    }
  }, [status, router, path]);

  return (
    <div className="flex justify-center gap-4 mt-4">
      <button
        onClick={() => handleSocialLogin("github")}
        className="p-3 bg-white border rounded-full shadow-md hover:shadow-lg"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          width={30}
          height={30}
          alt="github logo"
        />
      </button>

      <button
        onClick={() => handleSocialLogin("google")}
        className="p-3 bg-white border rounded-full shadow-md hover:shadow-lg"
      >
        <Image
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          width={30}
          height={30}
          alt="google logo"
        />
      </button>
    </div>
  );
};

export default GoogleGithubLogin;
