import React from "react";
import { Link } from "react-router-dom";
import CatalogoItem from "./CatalogoItem";
import catalogoData from "../catalogoData";

const Catalogo = () => {
  return (
    <div>
      <h2>Catálogo de productos</h2>
      {catalogoData.map((item) => (
        <Link key={item.id} to={`/producto/${item.id}`}>
          {/* Pasa los datos como props al componente CatalogoItem */}
          <CatalogoItem
            nombre={item.nombre}
            categoria={item.categoria}
            precio={item.precio}
          />
        </Link>
      ))}
    </div>
  );
};

export default Catalogo;
