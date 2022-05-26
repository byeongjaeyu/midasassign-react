import React, {useState, useEffect} from 'react';
import Container from './Container';
import '../css/NewsMenu.css';

const NewsMenu = (props) => {
    const [selected, setSelected] = useState(props.mode);

    const activated = (e) => {
      let prevLink = document.getElementById(selected);
      if (selected !== e.currentTarget.id && prevLink) {
        prevLink.classList.remove("onmenu");
        setSelected(e.currentTarget.id);
      }
    };
  
    useEffect(() => {
      let currentLink = document.getElementById(selected);
      if (currentLink) {
        currentLink.className += " onmenu";
        props.setMode(selected);
      }
    }, [selected]);
  
    return (

        <ul className="menu">
            <li className="menu-item" id="notice" onClick={activated}>
            공지사항
            </li>
            <li className="menu-item" id="news" onClick={activated}>
            언론 속 이디야
            </li>
            <li className="menu-item" id="pr" onClick={activated}>
            홍보영상
            </li>
            <li className="menu-item" id="award" onClick={activated}>
            수상내역
            </li>
        </ul>

    );
}
 
export default NewsMenu;