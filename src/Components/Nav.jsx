import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import "../css/Nav.css";

const Nav = () => {
  const navInfo = 
    [
      ["이디야 디자인","design"],
      ["로그인","login"],
      ["회원가입","signup"],
      ["이디야 음료","beverage"],
      ["이디야 뉴스","news"],
      ["매장찾기","search"],
    ]
  
  const [selected, setSelected] = useState("");
  const url = useLocation();

  useEffect(() => {
    if (selected === "") {
      let path = url.pathname.split("/")[1];
      if (path) {
        setSelected(path);
      } else {
        setSelected("home");
      }
    }
  }, []);


  return (
    <div className="navbar">
      <h1>
        <Link 
          className={
            "nav-link" + (selected === "home" ? " onnav" : "")
          } 
          to="/#" 
          id="nav-home"
          onClick={()=>setSelected("home")}
        >
          <img className="logo" src="/image/ediyalogo.gif" alt="Idiya" />
        </Link>
      </h1>
      <ul className="nav-items">
        {
          navInfo.map(([title,path],index)=>{
            console.log(title,path)
            return (
              <li className="nav-item" key={index}>
                <Link
                  className={
                    "nav-link" + (selected === path ? " onnav" : "")
                  }
                  to={`/${path}`}
                  id={`nav-${path}`}
                  onClick={()=>setSelected(path)}
                >
                  {title}
                </Link>
              </li>
            )
          })
        }

        {/* <li className="nav-item">
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
          <Link
            className="nav-link"
            to="/news"
            id="nav-news"
            onClick={activated}
          >
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
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;
