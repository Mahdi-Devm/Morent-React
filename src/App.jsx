import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
