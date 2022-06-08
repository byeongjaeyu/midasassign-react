import React, { useState, useEffect, useRef } from "react";
import "../css/NewsSearch.css";
import useSearchNews from "../hooks/useSearchNews";

const NewsSearch = ({ setNewsList, setCurrentSearch }) => {
  // inputRef 사용x => keyword state로 관리
  const [keyword, setKeyword] = useState("");
  // 변수명 => api에 맞춰서 변경
  const [keywordType, setKeywordType] = useState("title");
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
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
        setIsOpenDropdown(!isOpenDropdown);
      }
    };

    if (isOpenDropdown) {
      setTimeout(() => {
        window.addEventListener("click", onClick);
      }, 0);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpenDropdown]);

  return (
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
          onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        >
          {isOpenDropdown ? "▲" : "▼"}
        </button>
      </div>

      {/* 부모 위치 고려 */}
      <div
        className={
          "news-search-dropdown" +
          (isOpenDropdown ? " ondropdown" : " ondropdown1")
        }
        ref={dropdownRef}
      >
        {/*  중복 방지 */}
        {["title", "content"].map((type) => {
          return (
            <div
              className={
                "news-search-dropdown-child" +
                (keywordType === type ? " ondropdown-mode" : "")
              }
              mode={type}
              onClick={() => {
                setKeywordType(type);
                setIsOpenDropdown(false);
              }}
            >
              {
                {
                  title: "제목",
                  content: "내용",
                }[type]
              }
            </div>
          );
        })}
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
