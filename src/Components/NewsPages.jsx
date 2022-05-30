import { useState, useEffect } from "react";
import SearchNews from "../hooks/SearchNews";


const NewsPages = ({current, paging, setNewsList}) => {
    const [pageInfo, setPageInfo] = useState([1,1]);

    useEffect(()=>{
        const pageStart = parseInt(Number(paging.currentPage-1)/(paging.blockSize)) * (paging.blockSize) + 1;
        let pageEnd = pageStart + paging.blockSize - 1;
        if(pageEnd > paging.lastPage){
            pageEnd = paging.lastPage
        }
        setPageInfo([pageStart,pageEnd - pageStart + 1]);
    },[paging])

    const loadPage = (pageNumber) => {
        SearchNews({
            keyword:current.keyword,
            mode:current.mode,
            currentPage:pageNumber,
        }).then((res)=>{
            setNewsList(res.data);
        })
    }

    const jumpup = () => {
        const nextPage = parseInt((Number(paging.currentPage)+paging.blockSize-1)/(paging.blockSize)) * (paging.blockSize) + 1; 
        if(nextPage <= paging.lastPage){
            loadPage(nextPage)
        }
    }

    const jumpdown = () => {
        const nextPage = parseInt((Number(paging.currentPage)-paging.blockSize-1)/(paging.blockSize)) * (paging.blockSize) + paging.blockSize;
        if(nextPage>=paging.blockSize){
            loadPage(nextPage);
        }
    }

    return ( 
        <div className="pages-box">
            <button 
                class="page_arrow"
                id="page_arrow_down"
                onClick={jumpdown}
                disabled={
                    parseInt(Number(paging.currentPage - 1) / paging.blockSize) === 0
                }
            >
                <img src="../image/newsButtonPrev.svg"/>
            </button>   
            {
                [...Array(pageInfo[1])].map((n,index)=>{
                    return (
                        <span 
                            className={"pagenode" + (Number(paging.currentPage) === (pageInfo[0] + index) ? "-current" : "")}
                            id={pageInfo[0] + index}
                            key={index}
                            onClick = {(e)=>loadPage(e.target.id)}
                        >
                            {pageInfo[0] + index}
                        </span>
                    )
                })
            }
            <button 
                class="page_arrow" 
                id="page_arrow_up" 
                onClick={jumpup}
                disabled={
                    parseInt((Number(paging.currentPage)+paging.blockSize-1)/(paging.blockSize)) * (paging.blockSize) + 1 > paging.lastPage
                }
            >
                <img src="../image/newsButtonNext.svg"/>
            </button>
        </div>
    );
}
 
export default NewsPages;