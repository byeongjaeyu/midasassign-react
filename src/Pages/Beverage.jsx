import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "../Components/Container";
import Drink from "../Components/Drink";
import DrinkModal from "../Components/DrinkModal";
import "../css/Beverage.css";

const size = 10;

const LoadBeverage = async ({ start, size }) => {
  console.log(start, size);
  const response = await axios.get("http://localhost:6120/api/drink/list/", {
    params: {
      start: start,
      size: size,
    },
  });
  return response.data;
};

const Beverage = () => {
  const [modalInfo, setModalInfo] = useState([false, 0]);
  const [beverages, setBeverages] = useState([]);
  const [paging, setPaging] = useState({
    currentIndex: 1,
    lastIndex: 0,
  });

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight * 0.9) {
      LoadBeverage({
        start: paging.currentIndex,
        size: size,
      }).then((res) => {
        setBeverages(beverages.concat(res.drink));
        setPaging(res.paging);
      });
    }
  };

  const gotoTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (paging.currentIndex + 1 <= paging.lastIndex) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [beverages]);

  useEffect(() => {
    if (modalInfo[0]) {
      document.body.className += " onmodal";
    } else {
      document.body.classList.remove("onmodal");
    }
  }, [modalInfo]);

  useEffect(() => {
    LoadBeverage({
      start: 1,
      size: size,
    }).then((res) => {
      setBeverages(res.drink);
      setPaging(res.paging);
    });
  }, []);

  return (
    <Container>
      <div className="drinks-container">
        {beverages.map((beverage, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setModalInfo([true, index + 1]);
              }}
            >
              <Drink data={beverage} />
            </div>
          );
        })}
      </div>
      {modalInfo[0] && (
        <DrinkModal modalInfo={modalInfo} setModalInfo={setModalInfo} />
      )}
      <img
        class="gototop"
        id="gototop"
        src="../image/gototop.png"
        onClick={gotoTop}
      />
    </Container>
  );
};

export default Beverage;
