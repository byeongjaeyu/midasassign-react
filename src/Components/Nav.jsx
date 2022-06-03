import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//classnames 라이브러리 적용
import classNames from 'classnames';
import "../css/Nav.css";

const Nav = () => {
  const navInfo = [
    ["이디야 디자인", "design"],
    ["로그인", "login"],
    ["회원가입", "signup"],
    ["이디야 음료", "beverage"],
    ["이디야 뉴스", "news"],
    ["매장찾기", "search"],
  ];

  const [selected, setSelected] = useState("");
  // useLocation 변수이름 => location
  const location = useLocation();

  useEffect(() => {
    let path = location.pathname.split("/")[1];
    if (path) {
      setSelected(path);
    } else {
      setSelected("home");
    }
  }, []);

  return (
    <div className="navbar">
      <h1>
        {/* onnav 적용 생각. */}
        <Link
          className={"nav-link"}
          to="/"
          id="nav-home"
          onClick={() => setSelected("home")}
        >
          <img className="logo" src="/image/ediyalogo.gif" alt="go to home" />
        </Link>
      </h1>
      <ul className="nav-items">
        {/* https://ko.reactjs.org/docs/lists-and-keys.html */}
        {navInfo.map(([title, path], index) => {
          return (
            <li className="nav-item" key={index}>
              <Link
                // className={"nav-link" + (selected === path ? " onnav" : "")}
                className={
                  classNames('nav-link',{'onnav':selected===path})
                }
                to={`${path}`}
                onClick={() => setSelected(path)}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
