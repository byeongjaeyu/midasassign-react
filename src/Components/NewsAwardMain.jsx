import "../css/NewsAwardMain.css";
import NewsAwardContent from "./NewsAwardContent";
const NewsAwardMain = ({ awards }) => {
  return (
    <div className="award-box">
      <div className="award-year">
        <p>{awards[0].date.split(".")[0]}</p>
        <img className="award-dot" src="../image/dot.png" alt="year dot" />
      </div>
      <div className="award-contents">
        {awards.map((award) => {
          return <NewsAwardContent {...award} key={award.date} />;
        })}
      </div>
    </div>
  );
};

export default NewsAwardMain;
