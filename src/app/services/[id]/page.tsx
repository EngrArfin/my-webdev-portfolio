/* eslint-disable @next/next/no-img-element */
import { getServicesDetails } from "@/services/getServices";
import Link from "next/link";

interface Service {
  title: string;
  date: number;
  image: string;
  content: string;
  content1: string;
  _id: string;
}

interface ServiceDetailsResponse {
  service?: Service;
}

// Params interface for dynamic routes
interface Params {
  id: string;
}

// PageProps interface for the component props, including params
interface PageProps {
  params: Params;
}

// Define the component with proper typing for params
const BlogDetails = async ({ params }: PageProps) => {
  // Fetching service details
  const details = (await getServicesDetails(
    params.id
  )) as ServiceDetailsResponse;

  // If no service found, show error message
  if (!details?.service) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-black text-white p-6">
        <h2 className="text-3xl font-semibold text-center text-red-500">
          Service Not Found
        </h2>
        <p className="text-lg text-gray-400 text-center mt-4">
          The requested service details could not be found. Please check back
          later or contact support.
        </p>
      </div>
    );
  }

  const { title, content1, date, image } = details.service;

  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center">
      <div className="flex justify-center items-center mb-12">
        <img
          src={image || "/default-profile.jpg"}
          alt="Service Image"
          className="rounded-xl shadow-2xl object-cover w-full h-[50vh]"
        />
      </div>

      <div className="space-y-6 px-8 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-bold text-yellow-500 leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-100">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>

        <p className="text-xl text-gray-300 mt-4">{content1}</p>
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/"
          className="text-white bg-yellow-600 hover:bg-yellow-900 px-6 py-2 rounded-lg text-lg transition duration-300 ease-in-out"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
