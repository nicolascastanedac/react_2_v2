import React from "react";
import { Link } from "react-router-dom";
import CatalogoItem from "./CatalogoItem";
import catalogoData from "../catalogoData";

const Catalogo = ({ addToCart }) => {
  return (
    <div>
      <h2>Catálogo de productos</h2>
      {catalogoData.map((item) => (
        <Link key={item.id} to={`/producto/${item.id}`}>
          <CatalogoItem
            nombre={item.nombre}
            categoria={item.categoria}
            precio={item.precio}
            addToCart={() => addToCart(item)}
          />
        </Link>
      ))}
    </div>
  );
};

export default Catalogo;

