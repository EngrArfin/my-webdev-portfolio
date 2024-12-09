/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { TService } from "@/types";
import { getServices } from "@/services/getServices";
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const ServicesData = () => {
  const [services, setServices] = useState<TService[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const fetchedServices = await getServices();
        setServices(fetchedServices);
      } catch (err) {
        setError("Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8 ">
        <span className="text-xl text-gray-500">Loading blog...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-8">
        <span className="text-xl text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-2 py-10 mr-8">
      <h1 className="text-4xl font-semibold text-center mb-10 text-yellow-400">
        My Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
        {services.length > 0 ? (
          services.map((service) => (
            <ServicesCard service={service} key={service._id} />
          ))
        ) : (
          <div className="col-span-full text-center py-4 text-lg text-gray-500">
            No blog available at the moment.
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesData;
