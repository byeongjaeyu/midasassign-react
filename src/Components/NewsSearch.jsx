import React, {useState, useEffect, useRef} from 'react';
import '../css/NewsSearch.css'
// import { debounce } from 'lodash';

// const debounceEvent = debounce(()=>{},100);

const NewsSearch = () => {

    const [mode,setMode] = useState("title");
    const dropdownRef = useRef();
    const [toggle,setToggle] = useState(false);

    const onClick = (e) => {
        if(toggle && !dropdownRef.current.contains(e.target)){
            console.log('!')
            // setToggle(!toggle);
        }
    }

    useEffect(()=>{
        if(toggle){
            window.addEventListener("click",onClick);
        }
        return ()=>{
            window.removeEventListener("click",onClick);
        }
    },[toggle])
    

    return ( 
        <div className='news-search'>
            <div className="news-search-select-box" id="select-box">
                <span className="news-search-select-title" id="select_mode">
                    {
                        mode==="title" ? "제목" : "내용"
                    }
                </span>
                <span className="news-search-select-button" id="select-button" onClick={()=>setToggle(!toggle)}>▼</span>
            </div>
            {
                toggle && 
                <div className="news-search-dropdown" id="select-dropdown" ref={dropdownRef}>
                    <div 
                        className={"news-search-dropdown-child" + (mode==="title" ? " ondropdown-mode" : "")}
                        id="title" 
                        mode="title" 

                    >제목</div>
                    <div 
                        className={"news-search-dropdown-child" + (mode==="content" ? " ondropdown-mode" : "")}
                        id="content" 
                        mode="content" 

                    >내용</div>
                </div>
            }
            <div className="news-search-input-box">
                <input type="text" className="news-search-input" id="search-input"/>
                <span className="news-search-icon" id="search_icon">
                    <img src="../image/search.svg"/>
                </span>
            </div>
        </div>
    );
}
 
export default NewsSearch;