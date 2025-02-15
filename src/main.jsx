import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Shopingcart from "./Feature/Shopingcart/Shopingcart";
import HearthPahe from "./Feature/HearthPahe/HearthPahe";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Layout" element={<Layout />} />
          <Route path="hearth" element={<HearthPahe />} />
          <Route path="shopingcart" element={<Shopingcart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
