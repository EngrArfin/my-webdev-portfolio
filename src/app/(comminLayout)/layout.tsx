import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/NavBar";
import React from "react";

const commonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer />
    </div>
  );
};

export default commonLayout;
