import React, { useState, useEffect } from "react";
import Container from "./Container";
import "../css/NewsMenu.css";
import classNames from "classnames";

const NewsMenu = ({ mode, setMode }) => {
  const navMenuInfo = [
    ["공지사항", "notice"],
    ["언론 속 이디야", "news"],
    ["홍보영상", "pr"],
    ["수상내역", "award"],
  ];

  const [selected, setSelected] = useState("notice");

  useEffect(() => {
    setSelected(mode);
  }, [mode]);

  useEffect(() => {
    setMode(selected);
  }, [selected]);

  return (
    <ul className="menu">
      {navMenuInfo.map(([title, path], index) => {
        return (
          <li
            key={path}
            className={classNames("menu-item", { onmenu: selected === path })}
            onClick={() => setSelected(path)}
          >
            {title}
          </li>
        );
      })}
    </ul>
  );
};

export default NewsMenu;
