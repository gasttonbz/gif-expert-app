import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ categorie }) => {
  const { images, isLoading } = useFetchGifs(categorie);

  return (
    <>
      <h3>{categorie}</h3>
      {isLoading ? (<p>Cargando</p>) : null}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
