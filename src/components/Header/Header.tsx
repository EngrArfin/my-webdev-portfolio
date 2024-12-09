import Image from "next/image";
import HireMe from "../MagicButton/HireMe";
import photo from "../../UI/img/arfin1.png";

const Header: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-b from-gray-950 via-gray-900  text-white relative">
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>

      <div className="hero-content flex flex-col lg:flex-row items-center text-neutral-content relative z-10 px-6">
        {/* Profile Image Section */}
        <div className="w-40 h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#EAEAEA] shadow-lg lg:mr-12 mb-6 lg:mb-0">
          <Image
            src={photo || "/photo.png"}
            alt="Md Samsel Arfin"
            width={256}
            height={256}
            className="rounded-full"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Text Content Section */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-[#FFD700] leading-tight">
            Hi, I am <span className="text-[#FFC107]">Md Samsel Arfin</span>.
          </h1>
          <p className="text-xl text-[#D9D9D9] font-medium mb-4">
            MERN Full Stack Developer & UI/UX Enthusiast
          </p>

          <p className="mb-6 text-lg text-[#D9D9D9] leading-relaxed">
            With a BSc in Computer Science & Engineering, I specialize in MERN
            stack development. I am also skilled in Java, WordPress, UI/UX
            Design, and Digital Marketing. Constantly learning, I’m passionate
            about crafting clean, efficient, and scalable web applications.
          </p>

          {/* Hire Me Button */}
          <div className="flex justify-center lg:justify-start">
            <HireMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
