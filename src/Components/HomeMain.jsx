import "../css/HomeMain.css";
import { useNavigate } from "react-router-dom";

const HomeMain = () => {
  const navigate = useNavigate();
  const goToBeverage = () => {
    navigate("/beverage");
  };
  return (
    <div className="home-main">
      <div className="home-back">
        <h1 className="home-title">
          <span>ALWAYS BESIDE YOU</span>
          <span>EDIYA COFFEE</span>
        </h1>
        <hr className="home-divider" />
        <div className="home-title2">
          늘 당신곁에, 이디야 커피의 새로운 메뉴를 맛보세요.
        </div>
        <div className="home-button" onClick={goToBeverage}>
          메뉴 보기
        </div>
        <img
          className="shake1"
          src="../image/shake1.png"
          alt="cheeze shake image"
        />
        <img
          className="shake1-desc"
          src="../image/shakedesc1.png"
          alt="cheeze shake description"
        />
        <img
          className="shake2"
          src="../image/shake2.png"
          alt="choco and rice shake image"
        />
        <img
          className="shake2-desc1"
          src="../image/shakedesc2.png"
          alt="choco shake description"
        />
        <img
          className="shake2-desc2"
          src="../image/shakedesc3.png"
          alt="rice shake description"
        />
      </div>
    </div>
  );
};

export default HomeMain;
