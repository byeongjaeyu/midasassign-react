import React, { useState, useEffect } from "react";
import axios from "axios";
//currentPage(선택적 변수) 명시해주지 않으면 default = 1 (처음 키워드만 입력해서 찾을 때 or 초기 뉴스화면);
const useSearchNews = (
  loadStart,
  { keyword, keywordType, currentPage = 1 }
) => {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(false);
  const loadNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:6120/api/article/articles/",
        {
          params: {
            keyword,
            keywordType,
            currentPage,
          },
        }
      );
      // console.log(response);
      setPayload(response.data);
    } catch {
      console.log("error occured");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (loadStart) {
      loadNews();
    }
  }, [loadStart]);
  return { payload, loading };
};

export default useSearchNews;
