/* eslint-disable @typescript-eslint/no-unused-vars */

import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

interface User {
  id: string;
  email: string;
  name?: string;
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        const db = await connectDB();
        if (!db) {
          throw new Error("Failed to connect to the database");
        }

        const currentUser = await db.collection("admins").findOne({ email });
        if (!currentUser) {
          throw new Error("No user found with the provided email");
        }

        const passwordMatched = await bcrypt.compare(
          password,
          currentUser.password
        );
        if (!passwordMatched) {
          throw new Error("Incorrect password");
        }

        return {
          id: currentUser._id.toString(),
          email: currentUser.email,
          name: currentUser.name,
        };
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      const { name, email, image } = user;

      if (account?.provider === "github") {
        console.log("GitHub user data:", user);

        if (!email) {
          console.log("GitHub user has no email.");
          return false;
        }
      }

      try {
        const db = await connectDB();
        const userCollection = db?.collection("admins");

        if (!account) {
          console.log("Account is null or undefined");
          return false;
        }

        const userExist = await userCollection?.findOne({ email });

        if (!userExist) {
          await userCollection?.insertOne({
            name,
            email,
            image,
            provider: account.provider,
          });
          console.log("New user inserted");
        } else {
          console.log("User already exists:", userExist);
        }

        return true;
      } catch (error) {
        console.log("Error during signIn:", error);
        return false;
      }
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
