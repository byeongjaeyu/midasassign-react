import axios from "axios";
const SearchNews = async ({ keyword, keywordType, currentPage }) => {
  const data = await axios.get("http://localhost:6120/api/article/articles/", {
    params: {
      keyword,
      keywordType,
      currentPage,
    },
  });
  return data;
};

export default SearchNews;
