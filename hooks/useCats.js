import { useState, useEffect } from "react";
import { getCats, getCatImage } from "../components/api/cats";

export const useCats = () => {
  const [cats, setCats] = useState([]);
  // manage pagination
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCats(20)
    .then(cats => setCats(cats))
  }, [])

  async function loadMoreCats() {
    const catArray = []
    const response = await getCats(10, page)

    for (const cat of response) {
      if(cat.name === 'Malayan') continue;
      const catData = {...cat}
      // console.log('loadcat', cat)
      // if (!cat.image) {
      //   console.log('loadcatInner', cat.name)
      //   let catDataImage = await getCatImage(cat.id)
      //   catData.image = catDataImage[0]
      //   console.log('loadcatInner', catData.image)
      // }
      // const catImage = await getCatImage(cat.id)
      
      // console.log(JSON.stringify(catImage))
      catArray.push(catData)
    }
    
    setPage(page + 1)
    setCats([...cats, ...catArray])
  }

  return {
    cats,
    loadMoreCats,
  };

}
