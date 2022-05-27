import React, { useEffect, useState } from "react";
import NewsAward from "../Components/NewsAward";
import NewsMedia from "../Components/NewsMedia";
import NewsMenu from "../Components/NewsMenu";
import NewsTitle from "../Components/NewsTitle";

const News = () => {
  const [mode, setMode] = useState("notice");
  return (
    <>
        <NewsMenu mode={mode} setMode={setMode} />
        <NewsTitle mode={mode} />
        {
            mode==="news" &&
            <NewsMedia/>
        }
        {
            mode==="award" &&
            <NewsAward/>
        }
    </>
  );
};

export default News;
