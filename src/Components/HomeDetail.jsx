import { useEffect, useState } from "react";
import "../css/HomeDetail.css";
import Container from "./Container";
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeDetail;
