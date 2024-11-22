import About from "@/components/About/About";
import CourseCertificate from "@/components/CourseCertificate/CourseCertificate";
import ExpEduAchive from "@/components/ExpEduAchive/ExpEduAchive";
import Header from "@/components/Header/Header";
import PortfolioData from "@/components/Portfolio/PortfolioData";
import Skill from "@/components/Skill/Skill";

export default function Home() {
  return (
    <div className=" bg-gray-950">
      <hr />
      <Header />
      <About />
      <Skill />
      <PortfolioData />
      <CourseCertificate />
      <ExpEduAchive />
    </div>
  );
}
