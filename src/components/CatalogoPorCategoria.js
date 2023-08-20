import React, { useState, useEffect } from "react";
import CatalogoItem from "./CatalogoItem";
import catalogoData from "../catalogoData";
import { useParams } from "react-router-dom";

const CatalogoPorCategoria = ({ addToCart }) => {
  const { categoria } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductosFiltrados = () => {
      const productosFiltradosLocal = catalogoData.filter(
        (item) => item.categoria === categoria
      );
      setProductosFiltrados(productosFiltradosLocal);
      setLoading(false);
    };

    fetchProductosFiltrados();
  }, [categoria]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Catálogo de productos - Categoría: {categoria}</h2>
      {productosFiltrados.map((item) => (
        <CatalogoItem
          key={item.id}
          nombre={item.nombre}
          categoria={item.categoria}
          precio={item.precio}
          addToCart={() => addToCart(item)}
        />
      ))}
    </div>
  );
};

export default CatalogoPorCategoria;
