import { MongoClient, Db, ServerApiVersion } from "mongodb";

let db: Db | null = null;

export const connectDB = async (): Promise<Db | null> => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("arfin-portfolio");
    return db;
  } catch (error) {
    console.log({ error });
    return null;
  }
};
