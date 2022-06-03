import React, { useState, useEffect } from "react";
import axios from "axios";
const useAxios = ({url,params=null}) => {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url,{params:params});
      setPayload(response.data);
    } catch {
      console.log("error occured");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return [payload, loading];
};

export default useAxios;
