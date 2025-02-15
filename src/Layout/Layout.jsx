import BodyMainPage from "../Feature/BodyMainPage/BodyMainPage";
import HeaderMainPage from "../Feature/HeaderMainPage/HeaderMainPage";
import MiddleLine from "../Feature/MiddleLine/MiddleLine";

function Layout() {
  return (
    <div className="items-center flex flex-grow justify-center  mt-18">
      <div className="  w-[1380px] ">
        <HeaderMainPage />
        <MiddleLine />
        <BodyMainPage />
      </div>
    </div>
  );
}

export default Layout;
