/* import { HiReceiptRefund } from "react-icons/hi";
 */
import { MdDownloadForOffline } from "react-icons/md";

const MagicButton = () => {
  return (
    <div>
      <button className="relative group inline-flex h-12 w-48 overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-green-500 p-[2px] focus:outline-none">
        {/* Animated background with hover color change and padding */}
        <span className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-teal-500 to-green-500 opacity-70 transform translate-x-[-120%] transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:from-green-500 group-hover:to-blue-500 group-hover:p-[4px]" />
        <span className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-blue-600">
          Download Resume
          <MdDownloadForOffline />
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
