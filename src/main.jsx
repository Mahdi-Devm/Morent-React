import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Shopingcart from "./Feature/Shopingcart/Shopingcart";
import HearthPahe from "./Feature/HearthPahe/HearthPahe";
import App from "./App";
import ContextApi from "./Context/ContextApi";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import ProductDetailPage from "./Feature/ProductDetailPage/ProductDetailPage";
import Login from "./Feature/Login/Login";

function MainApp() {
  return (
    <Provider store={store}>
      <ContextApi>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Layout />} />
              <Route path="hearth" element={<HearthPahe />} />
              <Route path="shopingcart" element={<Shopingcart />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ContextApi>
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
