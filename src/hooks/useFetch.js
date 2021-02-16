import React, { useEffect, useState } from "react";

const useFetch = (url) => {
 let showProducts  = JSON.parse(localStorage.getItem("products")) || [];

  const [data, setData] = useState(showProducts);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(data));
  }, [data]);

  const getData = async () => {
    try {
        const resp = await fetch(url);
        const datas = await resp.json();
        setData(datas);
        setFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, fetching];
};

export default useFetch;
