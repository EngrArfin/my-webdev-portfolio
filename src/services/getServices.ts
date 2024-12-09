import axios from "axios";
import { TService, TServiceDetails } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getServices = async (): Promise<TService[]> => {
  try {
    const res = await axios.get<{ services: TService[] }>(
      `${BASE_URL}/services/api/get-all`
    );

    console.log("Fetched services:", res.data);

    if (res.status !== 200 || !res.data.services) {
      throw new Error(`Failed to fetch services: ${res.statusText}`);
    }

    return res.data.services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export const getServicesDetails = async (
  id: string
): Promise<TServiceDetails> => {
  try {
    const res = await axios.get(`${BASE_URL}/services/api/${id}`);

    console.log("Fetched service details:", res.data);

    if (res.status !== 200) {
      throw new Error(`Failed to fetch service details: ${res.statusText}`);
    }

    return res.data as TServiceDetails;
  } catch (error) {
    console.error(`Error fetching service details for ID ${id}:`, error);
    return {} as TServiceDetails;
  }
};

/*  export const getServices = async () => {
  const res = await fetch("http://localhost:3000/services/api/get-all");
  const services = res.json();
  return services;
};

export const getServicesDetails = async (id: string) => {
  const res = await fetch(`http://localhost:3000/services/api/${id}`);
  const services = res.json();
  return services;
};

export const getProducts = async () => {
  const res = await fetch("http://localhost:3000/products/api/getdata");
  const products = res.json();
  return products;
}; 
 */
