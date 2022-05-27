import React, { useState, useEffect } from "react";
import Container from "./Container";
import "../css/NewsMenu.css";

const NewsMenu = (props) => {
  const navMenuInfo = 
  [
    ["공지사항","notice"],
    ["언론 속 이디야","news"],
    ["홍보영상","pr"],
    ["수상내역","award"],
  ]

  const [selected, setSelected] = useState(props.mode);

  useEffect(() => {
    props.setMode(selected);
  }, [selected]);

  return (
    <ul className="menu">
      {
        navMenuInfo.map(([title,path],index)=>{
          return (
            <li
              className={"menu-item" + (selected === path ? " onmenu" : "")}
              id={path}
              onClick={()=>setSelected(path)}
            >
              {title}
            </li>
          )
        })
      }
    </ul>
  );
};

export default NewsMenu;
