import React from "react";
import { Route, Routes } from "react-router-dom";

import News from "./Pages/News";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default IndexRoutes;
