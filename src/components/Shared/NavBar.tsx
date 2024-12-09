import MagicButton from "@/components/MagicButton/MagicButton";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="navbar z-50 fixed bg-gradient-to-b from-gray-950 via-gray-950 to-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/achivement">Achivement</Link>
            </li>
            <li>
              <Link href="/blogs">Blog</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Portfolio S Arfin
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/achivement">Achivement</Link>
          </li>
          <li>
            <Link href="/blogs">Blog</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/1etGZAfNZxjM9dKp7KLrt5rvOI21px1ni/view?usp=sharing"
          className=""
        >
          <MagicButton />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
