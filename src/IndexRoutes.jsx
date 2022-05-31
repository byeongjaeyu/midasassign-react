import React from "react";
import { Route, Routes } from "react-router-dom";
import Beverage from "./Pages/Beverage";
import Home from "./Pages/Home";

import News from "./Pages/News";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/beverage" element={<Beverage />} />
    </Routes>
  );
};

export default IndexRoutes;
