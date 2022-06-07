import json from "../Json/Award.json";
import Container from "./Container";
import "../css/NewsAward.css";
import { useEffect, useState } from "react";
import NewsAwardMain from "./NewsAwardMain";

const NewsAward = () => {
  const [awardData, setAwardData] = useState([]);
  useEffect(() => {
    let awardCurrentYear = null;
    let awardCurrentYearData = [];
    let awardAllData = [];

    json.data.forEach((award, index) => {
      const year = Number(award.date.split(".")[0]);
      if (year !== awardCurrentYear) {
        awardCurrentYear = year;
        if (awardCurrentYearData.length !== 0) {
          awardAllData = awardAllData.concat([awardCurrentYearData]);
          awardCurrentYearData = [];
        }
      }
      awardCurrentYearData = awardCurrentYearData.concat([award]);
      if (index === json.data.length - 1) {
        awardAllData = awardAllData.concat([awardCurrentYearData]);
      }
    });

    setAwardData(awardAllData);
  }, []);
  return (
    <div className="news-award">
      {awardData.length !== 0 &&
        awardData.map((awards) => {
          return (
            <div className="news-award-container">
              <Container>
                <NewsAwardMain awards={awards} />
              </Container>
            </div>
          );
        })}
    </div>
  );
};

export default NewsAward;
