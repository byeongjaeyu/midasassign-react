import { useEffect, useState } from "react";
import "../css/NewsMedia.css";

import SearchNews from "../hooks/SearchNews";

import NewsSearch from "./NewsSearch";
import NewsTable from "./NewsTable";

const NewsMedia = () => {

  const [newsList, setNewsList] = useState({
      articles:[],
      paging:{
          blockSize:1,
          currentPage:1,
          lastPage:1,
      }
  });

  useEffect(()=>{
    SearchNews({
        keyword: "",
        mode: "title",
        currentPage: 1,
      }).then((res) => {
        setNewsList(res.data);
      });
  },[])

  return (
    <div className="news-media">
      <NewsSearch setNewsList={setNewsList} />
      <NewsTable articles={newsList.articles}/>
    </div>
  );
};

export default NewsMedia;
