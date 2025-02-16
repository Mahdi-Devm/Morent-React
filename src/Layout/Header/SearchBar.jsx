import { AiOutlineSearch } from "react-icons/ai";
import { useSearch } from "../../Context/ContextApi";

function SearchBar() {
  const { setSearch } = useSearch();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex items-center mt-1 bg-white border-1 border-[#C3D4E966] p-2 rounded-4xl w-full sm:max-w-md mx-auto">
      <AiOutlineSearch className="text-gray-600 mr-2 text-2xl" />
      <input
        type="text"
        placeholder="Search something here..."
        className="w-full bg-transparent outline-none text-gray-700"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
