import { useState, useEffect } from "react";
import { getCats } from "../components/api/cats";
import { useLazyGetAllCatsQuery } from "../components/api";

export const useCats = () => {
  const [cats, setCats] = useState([]);
  // manage pagination
  const [page, setPage] = useState(1);
  const [trigger, results] = useLazyGetAllCatsQuery()
  
  useEffect(() => {
    
    trigger({ limit: 10, page }).unwrap()
    .then(response => setCats([...cats, ...response]))
  }, [])
  
  async function loadMoreCats() {
    trigger({ limit: 10, page }).unwrap()
    .then(response => setCats([...cats, ...response]))
    // const response = await getCats(10, page)
    
    setPage(page + 1)
  }

  return {
    cats,
    loadMoreCats,
  };

}
