import "../css/NewsTitle.css";
import json from "../Json/NewsTitle.json";
import Container from "./Container";

const NewsTitle = (props) => {
  //구조분해할당.. => 구조분해 할당 선언해놓고 사용.
  const { title, subTitle } = json.data[props.mode];
  return (
    <div className="news-title">
      <div>
        <h2 className="news-title-main">
          <img
            className="news-title-main-slash"
            src="/image/slash.svg"
            alt="/"
          />
          {title}
        </h2>
        <h3 className="news-title-sub">{subTitle}</h3>
      </div>
    </div>
  );
};

export default NewsTitle;
