import About from "@/components/About/About";
import CourseCertificate from "@/components/CourseCertificate/CourseCertificate";
import ExpEduAchive from "@/components/ExpEduAchive/ExpEduAchive";
import Header from "@/components/Header/Header";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skill from "@/components/Skill/Skill";

export default function Home() {
  return (
    <div className=" bg-gray-950">
      <hr />
      <Header />
      <About />
      <Skill />
      <Portfolio />
      <CourseCertificate />
      <ExpEduAchive />
    </div>
  );
}
