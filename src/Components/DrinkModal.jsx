import axios from "axios";
import { useState, useEffect } from "react";
import "../css/DrinkModal.css";

const DrinkModal = ({
  modalInfo: { isModalOpen, modalSelected },
  setModalInfo,
}) => {
  const [modalDetail, setModalDetail] = useState({
    title: "",
    englishTitle: "",
    description: "",
    calorie: "",
    sugars: "",
    natrium: "",
    protein: "",
    saturatedFat: "",
    caffeine: "",
  });

  const closeModal = (e) => {
    if (e.target.id === "wrapper") {
      setModalInfo([false, 0]);
    }
  };

  useEffect(() => {
    if (modalSelected !== 0) {
      axios
        .get("http://localhost:6120/api/drink/detail/", {
          params: {
            sn: Number(modalSelected),
          },
        })
        .then((res) => {
          setModalDetail(res.data.detail);
        });
    }

    if (isModalOpen) {
      document.addEventListener("click", closeModal);
    }
    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, [isModalOpen]);
  return (
    <div>
      {/* onclick */}
      {/* props drilling */}
      <div
        className={"modal-outer" + (isModalOpen ? " block" : "")}
        id="wrapper"
      />
      <div className="modal" id="modal">
        <img
          className="modal-exit"
          id="modal-exit"
          src="../image/modalExit.svg"
          alt="modal exit"
          onClick={() => {
            setModalInfo([false, 0]);
          }}
        />

        <div className="modal-head">
          <div className="modal-title-kr" id="modal-title-kr">
            {modalDetail.title}
          </div>
          <div className="modal-title-en" id="modal-title-en">
            {modalDetail.englishTitle}
          </div>
          <div className="modal-head-divider"></div>
          <div className="modal-head-description" id="modal-head-description">
            {modalDetail.description}
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-footer-detail-left">
            <div className="modal-footer-detail-left-title">
              <div className="modal-footer-detail">칼로리</div>
              <div className="modal-footer-detail">당류</div>
              <div className="modal-footer-detail">단백질</div>
            </div>
            <div className="modal-footer-detail-left-val">
              <div className="modal-footer-detail" id="cal">
                {modalDetail.calorie}
              </div>
              <div className="modal-footer-detail" id="sugar">
                {modalDetail.sugars}
              </div>
              <div className="modal-footer-detail" id="protein">
                {modalDetail.protein}
              </div>
            </div>
          </div>
          <div className="modal-footer-detail-right">
            <div className="modal-footer-detail-right-title">
              <div className="modal-footer-detail">포화지방</div>
              <div className="modal-footer-detail">나트륨</div>
              <div className="modal-footer-detail">카페인</div>
            </div>
            <div className="modal-footer-detail-right-val">
              <div className="modal-footer-detail" id="fat">
                {modalDetail.saturatedFat}
              </div>
              <div className="modal-footer-detail" id="na">
                {modalDetail.natrium}
              </div>
              <div className="modal-footer-detail" id="caffeine">
                {modalDetail.caffeine}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkModal;
