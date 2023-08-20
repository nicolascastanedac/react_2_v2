import React from "react";

const CartSummary = ({ cartItems, updateQuantity, removeItem }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.nombre}</p>
          <p>Cantidad: {item.cantidad}</p>
          <p>Precio: {item.precio}</p>
          <button onClick={() => updateQuantity(item.id, item.cantidad - 1)}>-</button>
          <button onClick={() => updateQuantity(item.id, item.cantidad + 1)}>+</button>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default CartSummary;
