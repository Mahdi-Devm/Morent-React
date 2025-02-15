import Logo from "./Logo";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <>
      <div className="fixed w-full top-0 left-0 p-3 z-40 border-b-2 border-[#C3D4E966] bg-white flex flex-col sm:flex-row sm:grid sm:grid-cols-3 sm:gap-4 sm:justify-between md:flex-row md:justify-center md:items-center md:px-6">
        <div className="flex justify-between items-center sm:col-span-1 md:col-span-1">
          <Logo />
          <Profile />
        </div>
        <div className="sm:col-span-3 md:col-span-2 md:flex justify-center">
          <SearchBar />
        </div>
      </div>
      {/* Desktop */}
      <div className="grid grid-cols-3 gap-4 fixed w-full top-0 left-0 p-3 border-b-2 border-[#C3D4E966] z-40 bg-white hidden lg:grid flex justify-center items-center">
        <div className="col-start-1">
          <Logo />
        </div>
        <div className="col-start-2">
          <SearchBar />
        </div>
        <div className="col-start-3 justify-self-end">
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Header;
