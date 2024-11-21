import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Skill from "@/components/Skill/Skill";

export default function Home() {
  return (
    <div className="items-center justify-center min-h-screen bg-gray-900">
      <Header />
      <About />
      <Skill />
    </div>
  );
}
