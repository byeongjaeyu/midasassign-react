import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/HomeDetailNews.css";
const HomeDetailNews = () => {
  const navigate = useNavigate();
  const [payload, loading] = useAxios({
    url: "http://localhost:6120/api/article/articles/",
    params: {
      keyword: "이디야",
      keywordType: "content",
      currentPage: 1,
    },
  });
  const gotoNews = () => {
    navigate("/news", { state: "news" });
  };
  return (
    <div className="home-articles">
      <div className="articles-title">
        <span>news</span>

        <button className="articles-button" onClick={gotoNews}>
          <img src="../image/homePlus.svg" alt="go to news" />
        </button>
      </div>
      <div className="articles-contents">
        {payload &&
          payload.articles.slice(0, 2).map((article) => {
            return (
              <div className="articles-content" key={article.sn}>
                <span>{article.title}</span>
                <span>
                  {article.registrationDate.split("T")[0].replace(/-/g, ".")}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomeDetailNews;
