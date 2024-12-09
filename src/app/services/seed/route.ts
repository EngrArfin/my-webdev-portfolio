import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/service";
import { Collection, Document } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();

  if (!db) {
    return new Response(
      JSON.stringify({ message: "Database connection failed" }),
      {
        status: 500,
      }
    );
  }

  const servicesCollection: Collection<Document> = db.collection("services");

  try {
    await servicesCollection.deleteMany();
    await servicesCollection.insertMany(services);

    return new NextResponse(JSON.stringify({ message: "Sent Successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Error occurred" }), {
      status: 500,
    });
  }
};
