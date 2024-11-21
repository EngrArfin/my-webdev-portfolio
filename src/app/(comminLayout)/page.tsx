import About from "@/components/About/About";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className="items-center justify-center min-h-screen bg-gray-900">
      <Header />
      <About />
    </div>
  );
}
