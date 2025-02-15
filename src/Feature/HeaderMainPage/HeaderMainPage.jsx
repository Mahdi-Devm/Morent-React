import { FaChevronDown } from "react-icons/fa";
import Image1 from "../image/Ads1.png";
import Image2 from "../image/Ads2.png";
import Dropdown from "./Dropdown";

function HeaderMainPage() {
  const locations = ["New York", "Los Angeles", "San Francisco"];
  const dates = ["March 1, 2025", "March 5, 2025", "March 10, 2025"];
  const times = ["10:00 AM", "2:00 PM", "5:00 PM"];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center sm:gap-8  mt-5">
        <div className="w-full sm:w-full md:w-1/2 mb-5 md:mb-0 flex justify-center p-2">
          <img
            src={Image1}
            alt="Advertisement 1"
            className="w-full rounded-lg shadow-lg md:hidden"
          />
          <img
            src={Image1}
            alt="Advertisement 1"
            className="hidden md:block w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full sm:w-full md:w-1/2 mb-5 md:mb-0 flex justify-center p-2">
          <img
            src={Image2}
            alt="Advertisement 2"
            className="w-full rounded-lg shadow-lg md:hidden"
          />
          <img
            src={Image2}
            alt="Advertisement 2"
            className="hidden md:block w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex justify-center mt-5 gap-5 sm:gap-60">
        <div className="w-full md:w-150 bg-white px-10 rounded-[10px]">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-200 to-blue-400 shadow-lg"></div>
            <div className="text-lg font-semibold">Pick - Up</div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-x-4">
            <div className="flex-1 group">
              <Dropdown label="Locations" options={locations} />
              <div className="text-sm text-gray-600">Select your time</div>
            </div>
            <div className="flex-1 group">
              <Dropdown label="Date" options={dates} />
              <div className="text-sm text-gray-600">Select your time</div>
            </div>
            <div className="flex-1 group">
              <Dropdown label="Time" options={times} />
              <div className="text-sm text-gray-600">Select your time</div>
            </div>
          </div>
        </div>
        <div className="w-12 h-12  bg-[#3563E9] rounded-full flex justify-center items-center shadow-sm text-white text-lg mx-15 hover:bg-[#3559e9] hover:transition-colors duration-300 hover:cursor-pointer fixed bottom-3 right-1  z-10">
          <FaChevronDown />
        </div>

        <div className="w-12 h-12 bg-[#3563E9] rounded-full flex justify-center items-center shadow-sm text-white text-lg mx-15 hover:bg-[#3559e9] hover:transition-colors duration-300 hover:cursor-pointer fixed bottom-3 right-1 md:hidden z-10">
          <FaChevronDown />
        </div>

        <div className="w-full md:w-150 bg-white px-10 rounded-[10px] px-5">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-300 shadow-lg"></div>
            <div className="text-lg font-semibold">Drop - Off</div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-x-4">
            <div className="flex-1 group">
              <Dropdown label="Locations" options={locations} />
              <div className="text-sm text-gray-600">Select your time</div>
            </div>
            <div className="flex-1 group">
              <Dropdown label="Date" options={dates} />
              <div className="text-sm text-gray-600">Select your time</div>
            </div>
            <div className="flex-1 group">
              <Dropdown label="Time" options={times} />
              <div className="text-sm text-gray-600">Select your time</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderMainPage;
