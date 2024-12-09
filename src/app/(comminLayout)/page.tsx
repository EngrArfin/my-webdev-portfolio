import About from "@/components/About/About";
import CourseCertificate from "@/components/CourseCertificate/CourseCertificate";
import ExpEduAchive from "@/components/ExpEduAchive/ExpEduAchive";
import ExperienceInfo from "@/components/ExperienceInfo/ExperienceInfo";
import Header from "@/components/Header/Header";
import PortfolioData from "@/components/Portfolio/PortfolioData";
import Skill from "@/components/Skill/Skill";
import Blogs from "@/components/Blogs/Blogs";
import ServicesData from "@/components/Blogs/ServicesData";

export default function Home() {
  return (
    <div className=" bg-gray-800">
      <hr />
      <Header />
      <About />
      <ExperienceInfo />
      <Skill />
      <PortfolioData />
      <CourseCertificate />
      <ExpEduAchive />
      <ServicesData />
      <Blogs />
    </div>
  );
}
