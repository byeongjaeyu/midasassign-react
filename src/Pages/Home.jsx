import Footer from "../Components/Footer";
import HomeDetail from "../Components/HomeDetail";
import HomeMain from "../Components/HomeMain";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <HomeMain />
      <HomeDetail />
      <Footer />
    </div>
  );
};

export default Home;
