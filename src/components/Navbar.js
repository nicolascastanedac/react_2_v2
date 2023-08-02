import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CartWidget from './CartWidget';
import Catalogo from "./Catalogo"; // Importa el componente Catalogo
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategorias = () => {
      const datosCategorias = ["Categoría A", "Categoría B", "Categoría C"];
      setCategorias(datosCategorias);
      setLoading(false);
    };

    fetchCategorias();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img src="palmar_resized.png" alt="Palmar Logo" width="50" height="50" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          {categorias.map((categoria, index) => (
            <li className="nav-item" key={index}>
              <Link className="nav-link" to={`/categoria/${categoria}`}>{categoria}</Link>
            </li>
          ))}
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;

