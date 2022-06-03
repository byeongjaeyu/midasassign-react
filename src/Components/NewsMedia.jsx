import { useEffect, useState } from "react";
import "../css/NewsMedia.css";

import SearchNews from "../hooks/SearchNews";
import NewsPages from "./NewsPages";

import NewsSearch from "./NewsSearch";
import NewsTable from "./NewsTable";

const NewsMedia = () => {
  // 다른곳에서 참조를 했을때도 알 수 있게 변수 이름. => currentSearch로 변경
  const [currentSearch, setCurrentSearch] = useState({
    keyword: "",
    keywordType: "title",
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
    // async await 가독성.
    SearchNews({
      keyword: currentSearch.keyword,
      keywordType: currentSearch.keywordType,
      currentPage: 1,
    }).then((res) => {
      setNewsList(res.data);
    });
  }, []);

  return (
    <div className="news-media">
      <NewsSearch
        setNewsList={setNewsList}
        setCurrentSearch={setCurrentSearch}
      />
      <NewsTable articles={newsList.articles} />
      <NewsPages
        currentSearch={currentSearch}
        paging={newsList.paging}
        setNewsList={setNewsList}
      />
    </div>
  );
};

export default NewsMedia;
