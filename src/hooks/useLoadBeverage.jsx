import axios from "axios";
import React, {useEffect, useState} from 'react';


// start 변수명 알수있게 변경 => startIndex
const useLoadBeverage = (loadStart,startIndex) => {
    const [payload, setPayload] = useState({
        drink:[],
        paging:{
            currentIndex:1,
            lastIndex:0,
        }
    });
    // isLoading
    const [loading, setLoading] = useState(true);
    const loadBeverage = async() => {
        try{
            const response = await axios.get("http://localhost:6120/api/drink/list/", {
              params: {
                start:startIndex,
                size:10,
              },
            });
            setPayload(response.data);
        } catch{
            console.log('error~');
        } finally{
            setLoading(false);
        }
    }
    
    useEffect(()=>{
        // console.log(start);
        if(loadStart){
            loadBeverage();
        }
    },[loadStart])

    return {payload,loading}
    
  };
export default useLoadBeverage