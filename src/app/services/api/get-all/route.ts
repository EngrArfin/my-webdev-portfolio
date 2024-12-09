import { connectDB } from "@/lib/connectDB";
import { Collection, Document } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDB();

    if (!db) {
      console.error("Database connection failed.");
      return NextResponse.json(
        { message: "Database connection failed" },
        { status: 500 }
      );
    }

    const servicesCollection: Collection<Document> = db.collection("services");

    const services = await servicesCollection.find().toArray();

    if (!services || services.length === 0) {
      console.warn("No services found in the database.");
      return NextResponse.json(
        { services: [], message: "No services available" },
        { status: 200 }
      );
    }

    return NextResponse.json({ services }, { status: 200 });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { message: "Error occurred while fetching services" },
      { status: 500 }
    );
  }
};
