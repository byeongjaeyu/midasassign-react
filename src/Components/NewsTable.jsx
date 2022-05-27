const NewsTable = ({articles}) => {
    console.log(articles);
    return ( 
        <table class="news_container" id="news_container">
            <thead>
                <tr className="news_column">
                    <th>순서</th>
                    <th>본문</th>
                    <th>날짜</th>
                </tr>
            </thead>
            <tbody className="news_container_body" id="news_container_body">
                {
                    articles.map((article)=>{
                        console.log(article);
                        return (
                            <td>
                                <th className="news-order">{article.sn}</th>
                            </td>
                        )
                    })
                }
            </tbody>
        </table>
    );
}
 
export default NewsTable;