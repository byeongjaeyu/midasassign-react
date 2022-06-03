import { useState, useEffect } from "react";
import useSearchNews from "../hooks/useSearchNews";
import "../css/NewsPages.css";

const NewsPages = ({
  currentSearch: { keyword, keywordType },
  paging: { currentPage, blockSize, lastPage },
  setNewsList,
}) => {
  // 뭐가 뭔지 모르겠다.. => key, value 명시적이게 object로 변경
  const [pageInfo, setPageInfo] = useState({
    start: 1,
    size: 1,
  });
  const [loadStart, setLoadStart] = useState(false);
  const [selectPageNumber, setSelectPageNumber] = useState(1);
  const { payload, loading } = useSearchNews(loadStart, {
    keyword,
    keywordType,
    currentPage: selectPageNumber,
  });

  useEffect(() => {
    const pageStart =
      parseInt(Number(currentPage - 1) / blockSize) * blockSize + 1;
    // 한줄로..
    let pageEnd = pageStart + blockSize - 1;
    if (pageEnd > lastPage) {
      pageEnd = lastPage;
    }
    setPageInfo({
      start: pageStart,
      size: pageEnd - pageStart + 1,
    });
  }, [currentPage, blockSize, lastPage]);

  useEffect(() => {
    if (payload) {
      setNewsList(payload);
      setLoadStart(false);
    }
  }, [payload]);

  const loadPage = (pageNumber) => {
    setSelectPageNumber(pageNumber);
    setLoadStart(true);
  };

  const jumpup = () => {
    const nextPage =
      parseInt((Number(currentPage) + blockSize - 1) / blockSize) * blockSize +
      1;
    if (nextPage <= lastPage) {
      loadPage(nextPage);
    }
  };

  const jumpdown = () => {
    const nextPage =
      parseInt((Number(currentPage) - blockSize - 1) / blockSize) * blockSize +
      blockSize;
    if (nextPage >= blockSize) {
      loadPage(nextPage);
    }
  };

  return (
    <div className="pages-box">
      <button
        className="page-arrow"
        id="page-arrow-down"
        onClick={jumpdown}
        disabled={parseInt(Number(currentPage - 1) / blockSize) === 0}
      >
        <img src="../image/newsButtonPrev.svg" />
      </button>
      {[...Array(pageInfo.size)].map((_, index) => {
        // 중복된 변수 => 선언 후 사용
        const pageIndex = pageInfo.start + index;
        return (
          <span
            className={
              "pagenode" + (Number(currentPage) === pageIndex ? "-current" : "")
            }
            key={index}
            onClick={() => loadPage(pageIndex)}
          >
            {pageIndex}
          </span>
        );
      })}
      <button
        className="page-arrow"
        id="page-arrow-up"
        onClick={jumpup}
        disabled={
          parseInt((Number(currentPage) + blockSize - 1) / blockSize) *
            blockSize +
            1 >
          lastPage
        }
      >
        <img src="../image/newsButtonNext.svg" />
      </button>
    </div>
  );
};

export default NewsPages;
