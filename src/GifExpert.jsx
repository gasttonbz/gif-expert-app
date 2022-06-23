import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

function GifExpert() {
  const [categories, setCategories] = useState([
    "Dragon Ball"
  ]);

  const addCategory = (nuevoValor) => {
    if (categories.includes(nuevoValor)) return;
    setCategories([nuevoValor, ...categories]);
  };

  return (
    <>
      <h1>GifExpert</h1>

      <AddCategory añadirElemento={addCategory} />

      {categories.map((category) => (
        <GifGrid categorie={category} key={category} />
      ))}
    </>
  );
}

export default GifExpert;
