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
          /* 구조분해 할당 */
          const { sn, imgSrc, content, registrationDate, title } = article;
          return (
            <tr key={article.sn} className="news-data">
              <td className="news-data-order">{sn}</td>
              <td className="news-data-content">
                <img src={imgSrc} alt="No Image" height="100%" width="auto" />
                <div>
                  <div className="news-data-content-title">{title}</div>
                  <div className="news-data-content-description">{content}</div>
                </div>
              </td>
              <td className="news-data-date">
                {registrationDate.split("T")[0].replace(/-/g, ".")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default NewsTable;
