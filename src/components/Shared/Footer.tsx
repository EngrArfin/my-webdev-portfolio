import Image from "next/image";
import footerphoto from "../../UI/img/arfin.jpeg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-screen-lg mx-auto text-center">
        <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mx-auto mb-8">
          <Image
            src={footerphoto || "/photo.png"}
            alt="Md Samsel Arfin"
            width={192}
            height={192}
            className="rounded-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <h2 className="text-4xl text-yellow-500 font-bold mb-4">
          GET IN TOUCH
        </h2>
        <p className="text-white mb-12">
          Feel free to reach out. I am open to discussing new projects, creative
          ideas, or opportunities to be part of your visions.
        </p>
      </div>

      <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl font-bold text-yellow-500 mb-4">
            DON NOT BE SHY!
          </h3>
          <p className="text-white mb-8">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>
          <div className="flex items-center mb-4">
            <div className="bg-yellow-500 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-black"
              >
                <path d="M20 4h-16c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-12c0-1.105-.895-2-2-2zm-10 9h-5v-2h5v2zm8 5h-16v-1h16v1zm-10-5h-5v-2h5v2zm5 0h-2v-2h2v2zm5 0h-2v-2h2v2zm-2-5h-10v-2h10v2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-white">MAIL ME</p>
              <p className="text-white">arfin.cse.green.edu.bd@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-yellow-500 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-black"
              >
                <path d="M20 15.5c0 1.597-1.156 3.059-2.75 3.467v.533c0 .828-.672 1.5-1.5 1.5h-8c-.828 0-1.5-.672-1.5-1.5v-.533c-1.594-.408-2.75-1.87-2.75-3.467v-7c0-1.597 1.156-3.059 2.75-3.467v-.533c0-.828.672-1.5 1.5-1.5h8c.828 0 1.5.672 1.5 1.5v.533c1.594.408 2.75 1.87 2.75 3.467v7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-white">CALL ME</p>
              <p className="text-white">+8801952487468</p>
            </div>
          </div>
          <div className="flex mt-6 space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-gray-300 transition-colors duration-300 text-3xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-gray-300 transition-colors duration-300 text-3xl"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-gray-300 transition-colors duration-300 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-gray-300 transition-colors duration-300 text-3xl"
            >
              <FaGithub />
            </a>

            <a
              href="/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-gray-300 transition-colors duration-300 text-3xl"
            >
              <IoMdLogIn />
            </a>
          </div>
        </div>

        <div>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="w-full p-3 bg-gray-800 rounded-md text-white placeholder-gray-100"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full p-3 bg-gray-800 rounded-md text-white placeholder-gray-100"
            />
            <input
              type="text"
              placeholder="YOUR SUBJECT"
              className="w-full p-3 bg-gray-800 rounded-md text-white placeholder-gray-100"
            />
            <textarea
              placeholder="YOUR MESSAGE"
              className="w-full p-3 bg-gray-800 rounded-md text-white placeholder-gray-100"
              rows={5}
            ></textarea>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-md transition duration-300 flex items-center justify-center">
              SEND MESSAGE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-2"
              >
                <path d="M3.44 18.719l7.86-6.482-7.861-6.482c-.876-.72-1.261-1.766-1.118-2.764.145-1.027.792-1.921 1.729-2.442 1.004-.555 2.303-.681 3.539-.27 2.498.85 15.11 6.541 15.11 6.541s-12.612 5.692-15.11 6.541c-1.236.411-2.535.285-3.539-.27-.937-.521-1.584-1.415-1.729-2.442-.144-.998.241-2.044 1.118-2.764z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;
