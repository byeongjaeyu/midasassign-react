import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import NewsAward from "../Components/NewsAward";
import NewsMedia from "../Components/NewsMedia";
import NewsMenu from "../Components/NewsMenu";
import NewsTitle from "../Components/NewsTitle";
import { useLocation } from "react-router-dom";

const News = () => {
  const [mode, setMode] = useState("notice");
  const { state } = useLocation();
  useEffect(() => {
    if (state) {
      setMode(state);
    }
  }, []);
  return (
    <>
      <NewsMenu mode={mode} setMode={setMode} />
      <NewsTitle mode={mode} />
      {mode === "news" && <NewsMedia />}
      {mode === "award" && <NewsAward />}
      <Footer />
    </>
  );
};

export default News;
