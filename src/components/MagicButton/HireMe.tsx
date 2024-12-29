import Link from "next/link";
import { HiReceiptRefund } from "react-icons/hi";

const HireMe = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {/* Hire Me Button */}
        <button className="w-full sm:w-auto px-4 py-2 sm:px-8 sm:py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300 flex items-center justify-center mt-3">
          <span className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-70 transform translate-x-[-120%] transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:p-[4px]" />
          <span className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-red-900 px-6 text-sm font-semibold text-white transition-colors duration-300 ease-in-out group-hover:text-yellow-400">
            <Link href="/footer" className="flex items-center">
              Hire Me
              <HiReceiptRefund className="ml-2" />
            </Link>
          </span>
        </button>

        {/* View Portfolio Button */}
        <button className="w-full sm:w-auto px-4 py-2 sm:px-8 sm:py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300 flex items-center justify-center mt-3">
          <span className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-70 transform translate-x-[-120%] transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:p-[4px]" />
          <span className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-red-900 px-6 text-sm font-semibold text-white transition-colors duration-300 ease-in-out group-hover:text-yellow-400">
            <Link href="/portfolio" className="flex items-center">
              View Portfolio
              <HiReceiptRefund className="ml-2" />
            </Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HireMe;
