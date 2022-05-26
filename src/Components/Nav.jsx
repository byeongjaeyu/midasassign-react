import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import "../css/Nav.css";

const Nav = () => {
  const [selected, setSelected] = useState("");
  const url = useLocation();

  useEffect(() => {
    if (selected === "") {
      let path = url.pathname.split("/")[1];
      if (path) {
        setSelected(`nav-${path}`);
      } else {
        setSelected("nav-home");
      }
    }
  }, []);

  useEffect(() => {
    let currentLink = document.getElementById(selected);
    if (currentLink) {
      currentLink.className += " onnav";
    }
  }, [selected]);

  const activated = (e) => {
    let prevLink = document.getElementById(selected);
    if (e.currentTarget.id !== selected && prevLink) {
      prevLink.classList.remove("onnav");
      setSelected(e.currentTarget.id);
    }
  };

  return (
    <div className="navbar">
        <h1>
      <Link className="nav-link" to="/#" id="nav-home" onClick={activated}>
          <img className="logo" src="/image/ediyalogo.gif" alt="Idiya" />
      </Link>
        </h1>
      <ul className="nav-items">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/#"
            id="nav-design"
            onClick={activated}
          >
            이디야 디자인
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/#" id="nav-login" onClick={activated}>
            로그인
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/#"
            id="nav-signup"
            onClick={activated}
          >
            회원가입
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/#" id="nav-drink" onClick={activated}>
            이디야 음료
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/news" id="nav-news" onClick={activated}>
            이디야 뉴스
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/#"
            id="nav-search"
            onClick={activated}
          >
            매장찾기
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
