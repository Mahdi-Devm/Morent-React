import { FaChevronDown } from "react-icons/fa";
import PropTypes from "prop-types";
export default function Dropdown({ label, options }) {
  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <div className="text-sm">{label}</div>
        <FaChevronDown className="text-gray-500" />
      </div>
      <div className="absolute left-0 mt-1 w-full bg-white shadow-lg rounded-md z-10 hidden group-hover:block">
        <ul className="space-y-2 p-2 hover:cursor-pointer">
          {options.map((option, index) => (
            <li
              key={index}
              className="text-sm p-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
