import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Global } from "./components/styles/Global.styled";

import App from "./App";
import CountryDetails from "./components/Pages/CountryDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/countries/:countryId" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
    <Global />
  </React.StrictMode>
);
