import BodyMainPage from "../Feature/BodyMainPage/BodyMainPage";
import HeaderMainPage from "../Feature/HeaderMainPage/HeaderMainPage";
import MiddleLine from "../Feature/MiddleLine/MiddleLine";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function Layout() {
  return (
    <div className="flex flex-col ">
      <Header />
      <div className="items-center flex flex-grow justify-center  mt-18">
        <div className="  w-[1380px] ">
          <HeaderMainPage />
          <MiddleLine />
          <BodyMainPage />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
