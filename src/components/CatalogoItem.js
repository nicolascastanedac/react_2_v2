// src/components/CatalogoItem.js

import React from "react";



const CatalogoItem = ({ nombre, categoria, precio, addToCart }) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Categoría: {categoria}</p>
      <p>Precio: {precio}</p>
      <button onClick={() => addToCart({ nombre, categoria, precio })}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default CatalogoItem;