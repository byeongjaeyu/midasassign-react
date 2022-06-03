import { useEffect, useState } from "react";
import "../css/HomeDetail.css";
import Container from "./Container";
import HomeDetailNews from "./HomeDetailNews";
import HomeDetailNotice from "./HomeDetailNotice";
import HomeDetailYoutube from "./HomeDetailYoutube";
const HomeDetail = () => {
  // const [homeData, setHomeData] = useState({

  // })
  // useEffect(()=>{

  // },[])
  return (
    <div className="home-detail">
      <Container>
        <div className="home-detail-content">
          <HomeDetailYoutube />
          <div>
            <HomeDetailNotice />
            <HomeDetailNews/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeDetail;
