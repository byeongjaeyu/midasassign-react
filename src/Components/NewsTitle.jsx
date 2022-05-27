import "../css/NewsTitle.css";
import json from "../Json/NewsTitle.json";
import Container from "./Container";

const NewsTitle = (props) => {
  return (
    <div className="news-title">
      <div>
        <h2 className="news-title-main">
          <img
            className="news-title-main-slash"
            src="/image/slash.svg"
            alt="/"
          />
          {json.data[props.mode].title}
        </h2>
        <h3 className="news-title-sub">{json.data[props.mode].subTitle}</h3>
      </div>
    </div>
  );
};

export default NewsTitle;
