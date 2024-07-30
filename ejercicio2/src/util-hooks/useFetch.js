import { useState, useEffect } from "react";
import { useChangeStore } from "../zustand/useChangeStore";
import { useFavoritesStore } from "../zustand/useFavoritesStore";

export const useFetch = (options) => {
  const [data, setData] = useState(null);

  const { flag } = useChangeStore()

  const { count } = useFavoritesStore()

  const fetchData = () => {
    if(localStorage.getItem("meetups")) {
      let meetups = JSON.parse(localStorage.getItem("meetups") || [])
      setData(meetups)
    } else {
      fetch(options.url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        localStorage.setItem("meetups", JSON.stringify(json))
      });
    }
  }

  useEffect(() => {
    fetchData()
  }, [options.url,flag,count]);

  return {
    data,
  };
};
