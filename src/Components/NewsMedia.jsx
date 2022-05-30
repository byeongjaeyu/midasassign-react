import { useEffect, useState } from "react";
import "../css/NewsMedia.css";

import SearchNews from "../hooks/SearchNews";
import NewsPages from "./NewsPages";

import NewsSearch from "./NewsSearch";
import NewsTable from "./NewsTable";

const NewsMedia = () => {
  const [current, setCurrent] = useState({
    keyword: "",
    mode: "title",
  });
  const [newsList, setNewsList] = useState({
    articles: [],
    paging: {
      blockSize: 1,
      currentPage: 1,
      lastPage: 1,
    },
  });

  useEffect(() => {
    SearchNews({
      keyword: current.keyword,
      mode: current.mode,
      currentPage: 1,
    }).then((res) => {
      setNewsList(res.data);
    });
  }, []);

  return (
    <div className="news-media">
      <NewsSearch setNewsList={setNewsList} setCurrent={setCurrent} />
      <NewsTable articles={newsList.articles} />
      <NewsPages
        current={current}
        paging={newsList.paging}
        setNewsList={setNewsList}
      />
    </div>
  );
};

export default NewsMedia;
