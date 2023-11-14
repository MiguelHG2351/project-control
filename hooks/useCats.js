import { useState, useEffect } from "react";
import { getCats } from "../components/api/cats";

export const useCats = () => {
  const [cats, setCats] = useState([]);
  // manage pagination
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCats(20)
    .then(cats => setCats(cats))
  }, [])

  async function loadMoreCats() {
    const response = await getCats(10, page)
    
    setPage(page + 1)
    setCats([...cats, ...response])
  }

  return {
    cats,
    loadMoreCats,
  };

}
