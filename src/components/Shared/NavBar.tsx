import MagicButton from "@/components/MagicButton/MagicButton";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="navbar z-50 fixed w-full bg-gradient-to-b from-gray-950 via-gray-950 to-black text-white">
      <div className="navbar-start">
        {/* Mobile Menu Toggle */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href="/about"
                className="text-white font-semibold text-sm hover:text-yellow-500 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="text-white font-semibold text-sm hover:text-yellow-500 transition-colors duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/achivement"
                className="text-white font-semibold text-sm hover:text-yellow-500 transition-colors duration-300"
              >
                Achievement
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="text-white font-semibold text-sm hover:text-yellow-500 transition-colors duration-300"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-lg sm:text-xl">
          Portfolio S Arfin
        </Link>
      </div>

      {/* Navbar Center for Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <Link
              href="/about"
              className="text-white font-semibold text-sm sm:text-lg hover:text-yellow-500 transition-colors duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="text-white font-semibold text-sm sm:text-lg hover:text-yellow-500 transition-colors duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/achivement"
              className="text-white font-semibold text-sm sm:text-lg hover:text-yellow-500 transition-colors duration-300"
            >
              Achievement
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="text-white font-semibold text-sm sm:text-lg hover:text-yellow-500 transition-colors duration-300"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4">
        {/* Show MagicButton on all screens */}
        <a
          href="https://drive.google.com/file/d/1etGZAfNZxjM9dKp7KLrt5rvOI21px1ni/view?usp=sharing"
          className="block lg:hidden"
        >
          <MagicButton />
        </a>
        <a
          href="https://drive.google.com/file/d/1etGZAfNZxjM9dKp7KLrt5rvOI21px1ni/view?usp=sharing"
          className="hidden lg:block"
        >
          <MagicButton />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
