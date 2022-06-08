import React, { useState, useEffect, useRef } from "react";
import "../css/NewsSearch.css";
import useSearchNews from "../hooks/useSearchNews";

const NewsSearch = ({ setNewsList, setCurrentSearch }) => {
  // inputRef 사용x => keyword state로 관리
  const [keyword, setKeyword] = useState("");
  // 변수명 => api에 맞춰서 변경
  const [keywordType, setKeywordType] = useState("title");
  const [toggle, setToggle] = useState(false);
  const [loadStart, setLoadStart] = useState(false);
  const dropdownRef = useRef(null);
  const { payload, loading } = useSearchNews(loadStart, {
    keyword,
    keywordType,
  });

  const search = () => {
    setLoadStart(true);
  };

  useEffect(() => {
    if (payload) {
      setNewsList(payload);
      setCurrentSearch({
        keyword,
        keywordType,
      });
      setLoadStart(false);
    }
  }, [payload]);

  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setToggle(!toggle);
      }
    };

    if (toggle) {
      setTimeout(() => {
        window.addEventListener("click", onClick);
      }, 0);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [toggle]);

  return (
    // 아이디 필요 없음. => 삭제
    <div className="news-search">
      <div className="news-search-select-box">
        <span className="news-search-select-title">
          {/* 스위치-케이스같은 구문을 사용해라 => 확장성 고려해서 변경 */}
          {
            {
              title: "제목",
              content: "내용",
            }[keywordType]
          }
        </span>
        <button
          className="news-search-select-button"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "▲" : "▼"}
        </button>
      </div>

      {/* 부모 위치 고려 */}
      <div
        className={
          "news-search-dropdown" + (toggle ? " ondropdown" : " ondropdown1")
        }
        ref={dropdownRef}
      >
        {/*  중복 방지 */}
        <div
          className={
            "news-search-dropdown-child" +
            (keywordType === "title" ? " ondropdown-mode" : "")
          }
          mode="title"
          onClick={() => {
            setKeywordType("title");
            setToggle(false);
          }}
        >
          제목
        </div>
        <div
          className={
            "news-search-dropdown-child" +
            (keywordType === "content" ? " ondropdown-mode" : "")
          }
          mode="content"
          onClick={() => {
            setKeywordType("content");
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
          onKeyDown={(e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter") {
              search();
            }
          }}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <span className="news-search-icon" onClick={search}>
          <img src="../image/search.svg" alt="search" />
        </span>
      </div>
    </div>
  );
};

export default NewsSearch;
