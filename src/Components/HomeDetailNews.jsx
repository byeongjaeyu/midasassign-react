import useAxios from "../hooks/useAxios";
import {useEffect, useState} from 'react';
import '../css/HomeDetailNews.css'
const HomeDetailNews = () => {
    const [payload, loading] = useAxios({
        url:'http://localhost:6120/api/article/articles/',
        params:{
            keyword:'이디야',
            keywordType:'content',
            currentPage:1,
        }
    })
    return (
        <div className="home-articles">
            {
                payload &&
                payload.articles.slice(0,2).map((article)=>{
                    return (
                        <div class="home-article">
                            <span>
                                {article.title}
                            </span>
                            <span>
                                {article.registrationDate.split('T')[0].replace(/-/g,'.')}
                            </span>
                        </div>
                    )
                })
            }
        </div>
    );
}
 
export default HomeDetailNews;