import "../css/NewsTable.css";

const NewsTable = ({ articles }) => {
  return (
    <table className="news-container">
      <thead>
        <tr>
          <th className="news-col-order">순서</th>
          <th className="news-col-content">본문</th>
          <th className="news-col-date">날짜</th>
        </tr>
      </thead>

      <tbody>
        {articles.map((article, index) => {
          console.log(article);
          return (
            <tr key={index} className="news-data">
              <td className="news-data-order">{article.sn}</td>
              <td className="news-data-content">
                <img
                  src={article.imgSrc}
                  alt="No Image"
                  height="100%"
                  width="auto"
                />
                <div>
                  <div className="news-data-content-title">{article.title}</div>
                  <div className="news-data-content-description">
                    {article.content}
                  </div>
                </div>
              </td>
              <td className="news-data-date">
                {article.registrationDate.split("T")[0].replace(/-/g, ".")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default NewsTable;
