import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

const useFetchGif = (category) => {
  const [gif, setGif] = useState([]);
  const [isLoading, setIdLoading] = useState(true);

  useEffect(() => {
    getGif(category).then((data) => setGif(data));
    setIdLoading(false);
  }, [category]);

  return {
    gif,
    isLoading,
  };
};

export default useFetchGif;
