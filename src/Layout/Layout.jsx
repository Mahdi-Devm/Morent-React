import { useEffect } from "react";
import { FaSmileBeam } from "react-icons/fa"; // تغییر به آیکون خوشامدی
import BodyMainPage from "../Feature/BodyMainPage/BodyMainPage";
import HeaderMainPage from "../Feature/HeaderMainPage/HeaderMainPage";
import MiddleLine from "../Feature/MiddleLine/MiddleLine";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => {
        toast.success(
          <div className="flex items-center">
            <FaSmileBeam className="text-yellow-500 mr-3 text-3xl" />{" "}
            <span>
              Message by CEO: Welcome to our site, I wish you a great purchase🌹
            </span>
          </div>,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeButton: true,
            className: "custom-toast",
            bodyClassName: "toast-body",
          }
        );
      }, 100);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="items-center flex flex-grow justify-center mt-18">
      <div className="w-[1380px]">
        <HeaderMainPage />
        <ToastContainer />
        <MiddleLine />
        <BodyMainPage />
      </div>
    </div>
  );
}

export default Layout;
