import React, { useState, useEffect, useRef } from "react";
import "../css/NewsSearch.css";
import SearchNews from "../hooks/SearchNews";

const NewsSearch = ({ setNewsList, setCurrent }) => {
  const [mode, setMode] = useState("title");
  const [toggle, setToggle] = useState(false);
  const inputRef = useRef();
  const dropdownRef = useRef(null);

  const search = async () => {
    const keyword = inputRef.current.value;

    SearchNews({
      keyword: keyword,
      mode: mode,
      currentPage: 1,
    }).then((res) => {
      setNewsList(res.data);
      setCurrent({
        keyword:keyword,
        mode:mode,
      })
    });
  };

  useEffect(() => {
    const onClick = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setToggle(!toggle);
      }
    };

    if (toggle) {
      setTimeout(() => {
        window.addEventListener("click", onClick);
      }, 100);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [toggle]);

  return (
    <div className="news-search">
      <div className="news-search-select-box" id="select-box">
        <span className="news-search-select-title" id="select_mode">
          {mode === "title" ? "제목" : "내용"}
        </span>
        <button
          className="news-search-select-button"
          id="select-button"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "▲" : "▼"}
        </button>
      </div>

      <div
        className={
          "news-search-dropdown" + (toggle ? " ondropdown" : " ondropdown1")
        }
        id="select-dropdown"
        ref={dropdownRef}
      >
        <div
          className={
            "news-search-dropdown-child" +
            (mode === "title" ? " ondropdown-mode" : "")
          }
          id="title"
          mode="title"
          onClick={() => {
            setMode("title");
            setToggle(false);
          }}
        >
          제목
        </div>
        <div
          className={
            "news-search-dropdown-child" +
            (mode === "content" ? " ondropdown-mode" : "")
          }
          id="content"
          mode="content"
          onClick={() => {
            setMode("content");
            setToggle(false);
          }}
        >
          내용
        </div>
      </div>

      <div className="news-search-input-box">
        <input
          type="text"
          className="news-search-input"
          id="search-input"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter") {
              search();
            }
          }}
        />
        <span className="news-search-icon" id="search_icon" onClick={search}>
          <img src="../image/search.svg" />
        </span>
      </div>
    </div>
  );
};

export default NewsSearch;
