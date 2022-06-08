import useLoadBeverage from "../hooks/useLoadBeverage";
import React, { useState, useEffect, useCallback } from "react";
import Container from "../Components/Container";
import Drink from "../Components/Drink";
import DrinkModal from "../Components/DrinkModal";
import "../css/Beverage.css";

// const size = process.env.REACT_APP_DRINK_LOAD_VALUE
// useCallback => hook으로 사용.

const Beverage = () => {
  // object 남들이 봐도 이해되게 => 변경
  const [modalInfo, setModalInfo] = useState({
    isModalOpen: false,
    modalSelected: 0,
  });
  const [beverages, setBeverages] = useState([]);
  const [paging, setPaging] = useState({
    currentIndex: 1,
    lastIndex: 0,
  });

  const [loadStart, setLoadStart] = useState(false);

  const { payload, loading } = useLoadBeverage(loadStart, paging.currentIndex);

  useEffect(() => {
    if (payload) {
      setBeverages(beverages.concat(payload.drink));
      setPaging(payload.paging);
      setLoadStart(false);
    }
  }, [payload]);

  const handleScroll = async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight * 0.95) {
      // console.log("!!");
      setLoadStart(true);
    }
  };

  const openModal = (index) => {
    setModalInfo({
      isModalOpen: true,
      modalSelected: index,
    });
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
    if (modalInfo.isModalOpen) {
      document.body.className += " onmodal";
    } else {
      document.body.classList.remove("onmodal");
    }
  }, [modalInfo]);

  useEffect(() => {
    setLoadStart(true);
  }, []);

  return (
    <Container>
      {loading && (
        <div className={"onload-outer" + loading ? " block" : ""}>
          <div className="onload-ring" />
        </div>
      )}
      <div className="drinks-container">
        {beverages.map((beverage, index) => {
          return (
            <div
              key={index}
              // 일관성.
              onClick={() => {
                openModal(index + 1);
              }}
            >
              <Drink data={beverage} />
            </div>
          );
        })}
      </div>
      {modalInfo.isModalOpen && (
        <DrinkModal modalInfo={modalInfo} setModalInfo={setModalInfo} />
      )}
      <img
        className="gototop"
        id="gototop"
        src="../image/gototop.png"
        alt=""
        onClick={gotoTop}
      />
    </Container>
  );
};

export default Beverage;
