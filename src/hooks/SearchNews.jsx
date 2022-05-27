import axios from "axios";
const SearchNews = async ({ keyword, mode, currentPage }) => {
  const data = await axios.get("http://localhost:6120/api/article/articles/", {
    params: {
      keyword: keyword,
      keywordType: mode,
      currentPage: currentPage,
    },
  });
  return data;
};

export default SearchNews;
