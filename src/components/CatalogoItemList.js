// CatalogoItemList.js
import React from "react";
import CatalogoItem from "./CatalogoItem";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const CatalogoItemList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Link key={item.id} to={`/producto/${item.id}`}>
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

export default CatalogoItemList;