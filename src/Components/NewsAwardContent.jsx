import { useState } from "react";
import "../css/NewsAwardContent.css";

const NewsAwardContent = ({
  date,
  content: { date: month, description, filepath, title },
}) => {
  const [detailShow, setDetailShow] = useState(false);
  return (
    <div className="award-content">
      <div className="award-content-main">
        <div className="content-main-info">
          <p className="content-main-date">{month}</p>
          <p className="content-main-title">{title}</p>
        </div>
        {detailShow ? (
          <img
            className="content-scroll"
            src="../image/arrow_open.svg"
            width="14px"
            height="auto"
            onClick={() => {
              setDetailShow(false);
            }}
            alt="close award detail"
          />
        ) : (
          <img
            className="content-scroll"
            src="../image/arrow_close.svg"
            width="14px"
            height="auto"
            onClick={() => {
              setDetailShow(true);
            }}
            alt="open award detail"
          />
        )}
      </div>
      {detailShow && (
        <div className="award-detail">
          <img
            className="detail-image"
            src={filepath}
            alt="award detail image"
          />
          <p className="detail-description">{description}</p>
          <div className="detail-info">
            <p className="detail-info-title">수상일</p>
            <p className="detail-info-detail">
              {date}.{}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsAwardContent;
