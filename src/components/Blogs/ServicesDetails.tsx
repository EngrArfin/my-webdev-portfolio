import { getServicesDetails } from "@/services/getServices";
import { TServiceDetails } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ServiceDetailsProps {
  params: { id: string };
}

const ServiceDetails = async ({ params }: ServiceDetailsProps) => {
  const details: TServiceDetails = await getServicesDetails(params.id);
  const { _id, title, content, date, image } = details;

  return (
    <div className="container mx-auto p-6 ">
      <hr className="mb-6" />
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <figure className="flex justify-center">
          <Image
            src={image || "/default-profile.jpg"}
            alt={title}
            className="rounded-lg shadow-lg object-cover"
            style={{ height: "400px", width: "100%", maxWidth: "500px" }}
          />
        </figure>

        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-600">{content}</p>

          <div className="flex items-center">
            <span className="text-yellow-500 font-semibold mr-2">{date}</span>
            <span className="text-gray-500">Rating</span>
          </div>

          <div className="flex items-center">
            <label
              htmlFor="quantity"
              className="mr-4 font-semibold text-gray-700"
            >
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              defaultValue="1"
              className="w-16 p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex space-x-4 pt-4">
            <button className="px-5 py-3 bg-sky-700 text-white text-sm lg:text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-transform duration-300 transform hover:scale-105">
              Buy Now
            </button>
            <Link
              href={`/cart/${_id}`}
              className="px-5 py-3 bg-sky-700 text-white text-sm lg:text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-transform duration-300 transform hover:scale-105"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
