import React, { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import "../css/HomeDetailNotice.css";

const HomeDetailNotice = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([
    {
      title: "",
      content: "",
      registrationDate: "",
    },
  ]);
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);
  const [payload, loading] = useAxios({
    url: "http://localhost:6120/api/notice/",
  });

  useEffect(() => {
    if (payload) {
      setNotices(payload);
      setCurrentNoticeIndex(0);
    }
  }, [payload]);

  const gotoNotice = () => {
    navigate("/news");
  };

  const changeNotice = (indexChangeValue) => {
    console.log(indexChangeValue);
    setCurrentNoticeIndex(currentNoticeIndex + indexChangeValue);
  };

  return (
    <div className="home-notice">
      <div className="notice-button-box">
        <button className="notice-button-title" onClick={gotoNotice}>
          NOTICE
        </button>
        <div className="notice-button-list">
          <button
            className="notice-button"
            onClick={() => {
              changeNotice(-1);
            }}
            disabled={currentNoticeIndex === 0}
          >
            <img src="../image/arrowPrev.svg" alt="previous notice" />
          </button>
          <button
            className="notice-button"
            onClick={() => {
              changeNotice(+1);
            }}
            disabled={currentNoticeIndex === notices.length - 1}
          >
            <img src="../image/arrowNext.svg" alt="next notice" />
          </button>
        </div>
      </div>
      <div className="notice-content">
        <div className="notice-content-title">
          {notices[currentNoticeIndex].title}
        </div>
        <div className="notice-content-date">
          {notices[currentNoticeIndex].registrationDate
            .split("T")[0]
            .replace(/-/g, ".")}
        </div>
        <div className="notice-content-content">
          {notices[currentNoticeIndex].content}
        </div>
      </div>
    </div>
  );
};

export default HomeDetailNotice;
