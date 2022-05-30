import '../css/NewsTable.css'

const NewsTable = ({ articles }) => {
  console.log(articles);
  return (
    <table className="news-container" id="news-container">
      <thead>
        <tr>
          <th>순서</th>
          <th>본문</th>
          <th>날짜</th>
        </tr>
      </thead>

      <tbody>
        {articles.map((article,index) => {
          console.log(article);
          return (
            <tr key={index}>
              <td className="news-order">{article.sn}</td>
              <td className="news-contents">
                <img src={article.imgSrc} alt="No Image" height="100%" width="auto"/>
                <div>
                    <div className="news-title">{article.title}</div>
                    <div className="news-content">{article.content}</div>
                </div>
              </td>
              <td className="news-date">
                {article.registrationDate.split('T')[0].replace(/-/g,'.')}
              </td>
            </tr>
          );
        })}
      </tbody>

    </table>
  );
};

export default NewsTable;
