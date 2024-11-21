import Image from "next/image";
import HireMe from "../MagicButton/HireMe";
import bacground from "../../UI/img/bacground.jpg";
import photo from "../../UI/img/arfin1.png";

const Header: React.FC = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bacground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex flex-col lg:flex-row items-center text-neutral-content">
        <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg lg:mr-8 mb-6 lg:mb-0">
          <Image
            src={photo}
            alt="Md Samsel Arfin"
            width={192}
            height={192}
            className="rounded-full"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="max-w-lg text-center lg:text-left">
          <h1 className="mb-2 text-4xl font-bold text-gray-100">
            I am <span className="text-yellow-500">Md Samsel Arfin.</span>
          </h1>
          <span className="text-2xl font-bold text-sky-400">
            MERN Full Stack Developer
          </span>

          <p className="mb-5 mt-5 text-base text-gray-300 leading-relaxed">
            I have completed my BSc in Computer Science & Engineering. In
            addition to being a MERN Stack developer, I have expertise in Java,
            WordPress, UI/UX Design, and Digital Marketing. I am passionate
            about learning new technologies and continuously improving my
            skills.
          </p>

          <div className="flex justify-center lg:justify-start">
            <HireMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
