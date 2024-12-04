export const getServices = async () => {
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
