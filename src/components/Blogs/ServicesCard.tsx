/* eslint-disable @next/next/no-img-element */

"use client";
import Link from "next/link";
import { TService } from "@/types";

interface ServicesCardProps {
  service: TService;
}

const ServicesCard = ({ service }: ServicesCardProps) => {
  const { _id, title, content, date, image } = service;

  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={image || "/default-profile.jpg"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl text-yellow-400 font-semibold">{title}</h2>
        <p className="text-sm text-gray-100 mb-4">
          {new Date(date).toLocaleDateString()}
        </p>
        <p className="text-gray-300 mb-6">{content.slice(0, 100)}...</p>

        <Link href={`/services/${_id}`}>
          <p className="text-yellow-500 hover:underline">Read More</p>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
