import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CartWidget from './components/CartWidget';
import Catalogo from "./components/Catalogo";
import ProductoDetalle from "./components/ProductoDetalle";
import Navbar from "./components/Navbar";
import CatalogoPorCategoria from "./components/CatalogoPorCategoria";
import CartSummary from "./components/CartSummary";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, cantidad: cartItem.cantidad + 1 } : cartItem
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, cantidad: 1 }]);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === itemId ? { ...cartItem, cantidad: newQuantity } : cartItem
    );
    setCartItems(updatedItems);
  };

  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
    setCartItems(updatedItems);
  };

  return (
    <Router>
      <div className="App">
        <Navbar itemCount={cartItems.length} />
        <CartWidget itemCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Catalogo addToCart={addToCart} />} />
          <Route path="/producto/:id" element={<ProductoDetalle addToCart={addToCart} />} />
          <Route path="/categoria/:categoria" element={<CatalogoPorCategoria addToCart={addToCart} />} />
          <Route path="/carrito" element={<CartSummary cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


