import React from "react";
import { Route, Routes } from "react-router-dom";
import Beverage from "./Pages/Beverage";

import News from "./Pages/News";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/news" element={<News />} />
      <Route path="/beverage" element={<Beverage />} />
    </Routes>
  );
};

export default IndexRoutes;
