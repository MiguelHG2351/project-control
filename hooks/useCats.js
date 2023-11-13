import { useState, useEffect } from "react";
import { getCats } from "../components/api/cats";

export const useCats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCats(20)
    .then(cats => setCats(cats))
  }, [])

  return {
    cats,
    setCats,
  };

}
