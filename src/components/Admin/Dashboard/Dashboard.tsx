"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaTachometerAlt,
  FaUserCog,
  FaPlusSquare,
  FaListUl,
  FaSignOutAlt,
} from "react-icons/fa";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800   text-white shadow-lg">
        <div className="flex flex-col items-center py-6">
          {session && (
            <>
              <div className="dropdown dropdown-end mb-4">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      alt="Profile"
                      src={session.user?.image || "/default-profile.png"}
                      height={96}
                      width={96}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link href="/admin/settings">Settings</Link>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">{session.user?.name}</p>
                <p className="text-sm text-gray-400">{session.user?.email}</p>
              </div>
            </>
          )}
        </div>

        {/* Navigation Menu */}
        <ul className="menu space-y-2">
          <li>
            <Link
              href="/admin"
              className="flex items-center p-4 hover:bg-gray-800 rounded-lg transition duration-200 ease-in-out"
            >
              <FaTachometerAlt className="mr-3 text-xl" /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/project"
              className="flex items-center p-4 hover:bg-sky-800 rounded-lg transition duration-200 ease-in-out"
            >
              <FaUserCog className="mr-3 text-xl" /> All Projects
            </Link>
          </li>
          <li>
            <Link
              href="/admin/addproject"
              className="flex items-center p-4 hover:bg-sky-800 rounded-lg transition duration-200 ease-in-out"
            >
              <FaPlusSquare className="mr-3 text-xl" /> Add Project
            </Link>
          </li>
          <li>
            <Link
              href="/admin/clientmessage"
              className="flex items-center p-4 hover:bg-sky-800 rounded-lg transition duration-200 ease-in-out"
            >
              <FaListUl className="mr-3 text-xl" /> Client Messages
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center p-4 text-red-600 hover:bg-red-700 hover:text-white rounded-lg transition duration-200 ease-in-out"
            >
              <FaSignOutAlt className="mr-3 text-xl" /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
