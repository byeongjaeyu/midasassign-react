import React, { useState } from "react";
import Container from "../Components/Container";
import NewsMenu from "../Components/NewsMenu";
import NewsTitle from "../Components/NewsTitle";

const News = () => {
    const [mode, setMode] = useState("notice");
    return ( 
        <>
        <Container>
            <NewsMenu mode={mode} setMode={setMode}/>
            <NewsTitle mode={mode}/>
        </Container>
        </>
    );
}
 
export default News;