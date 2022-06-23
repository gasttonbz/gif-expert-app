import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (categorie) => {
  

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const newGifs = async () => {
      const newGif = await getGifs(categorie);
      setImages(newGif);
      setIsLoading(false);
    }
    
    useEffect(() => {
        newGifs();
    }, [])

    return {
        images,
        isLoading
    }
}
