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
    <div className="min-h-full flex-shrink-0 w-64 h-full bg-gradient-to-b from-gray-950 via-sky-900 to-black text-white ">
      <div className="flex flex-col items-center justify-center my-4">
        {session && (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-40 rounded-full">
                  <Image
                    alt="Profile"
                    src={session.user?.image || "/default-profile.png"}
                    height="100"
                    width="100"
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
            <div className="text-center mt-2">
              <p className="font-semibold">{session.user?.name}</p>
              <p className="text-sm text-gray-600">{session.user?.email}</p>
            </div>
          </>
        )}
      </div>

      <ul className="menu max-h-screen overflow-y-auto">
        <li>
          <Link
            href="/admin"
            className="flex items-center p-4 hover:bg-base-300 rounded"
          >
            <FaTachometerAlt className="mr-2" /> Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/admin/project"
            className="flex items-center p-4 hover:bg-base-300 rounded"
          >
            <FaUserCog className="mr-2" /> All Project
          </Link>
        </li>
        <li></li>
        <li>
          <Link
            href="/admin/addproject"
            className="flex items-center p-4 hover:bg-base-300 rounded"
          >
            <FaPlusSquare className="mr-2" /> Add Project
          </Link>
        </li>
        <li>
          <Link
            href="/admin/clientmessage"
            className="flex items-center p-4 hover:bg-base-300 rounded"
          >
            <FaListUl className="mr-2" /> Client Message View
          </Link>
        </li>

        <li>
          <button
            onClick={handleLogout}
            className="flex items-center p-4 text-red-600 hover:bg-base-300 rounded"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
