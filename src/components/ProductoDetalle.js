import React from "react";
import catalogoData from "../catalogoData";
import { useParams } from "react-router-dom";

const ProductoDetalle = ({ addToCart }) => {
  const { id } = useParams();
  const producto = catalogoData.find((item) => item.id === Number(id));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>Detalles del producto</h2>
      <h3>{producto.nombre}</h3>
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: {producto.precio}</p>
      <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductoDetalle;
