"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface AuthProvidersProps {
  children: ReactNode;
}

const AuthProviders: React.FC<AuthProvidersProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProviders;
