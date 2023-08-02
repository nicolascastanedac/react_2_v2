import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa también 'Routes'
import Catalogo from "./components/Catalogo";
import ProductoDetalle from "./components/ProductoDetalle";
import Navbar from "./components/Navbar";
import CatalogoPorCategoria from "./components/CatalogoPorCategoria";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Cambia a <Routes> */}
          <Route path="/" element={<Catalogo />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="/categoria/:categoria" element={<CatalogoPorCategoria />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

