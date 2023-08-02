import React, { useState, useEffect } from "react";
import CatalogoItem from "./CatalogoItem";
import catalogoData from "../catalogoData";
import { useParams } from "react-router-dom"; // Importa 'useParams'

const CatalogoPorCategoria = () => {
  const { categoria } = useParams(); // Usa 'useParams()' para acceder a los parámetros de la URL
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductosFiltrados = () => {
      // En una aplicación real, aquí iría la llamada a una API
    
      // Por ahora, utilizaremos un filtrado en el lado del cliente con datos locales.
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
        />
      ))}
    </div>
  );
};

export default CatalogoPorCategoria;

