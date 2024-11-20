import { HiReceiptRefund } from "react-icons/hi";

const HireMe = () => {
  return (
    <div className="flex ">
      <button className="relative group inline-flex h-12 w-48 overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] focus:outline-none">
        <span className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-70 transform translate-x-[-120%] transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:p-[4px]" />
        <span className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition-colors duration-300 ease-in-out group-hover:text-purple-300">
          Hire Me
          <HiReceiptRefund />
        </span>
      </button>
    </div>
  );
};

export default HireMe;
