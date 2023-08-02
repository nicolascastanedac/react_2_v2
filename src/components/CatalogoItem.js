// src/components/CatalogoItem.js

import React from "react";



const CatalogoItem = ({ nombre, categoria, precio }) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Categoría: {categoria}</p>
      <p>Precio: {precio}</p>
    </div>
  );
};

export default CatalogoItem