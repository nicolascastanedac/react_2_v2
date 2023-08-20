import React from "react";
import cartIcon from './shopping-cart.png';

const CartWidget = ({ itemCount }) => {
  const cartWidgetStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginRight: '5px',
  };

  const itemCountStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '12px',
    padding: '2px 5px',
    borderRadius: '50%',
  };

  return (
    <div style={cartWidgetStyle}>
      <img src={cartIcon} alt="Cart Icon" style={iconStyle} />
      <span style={itemCountStyle}>{itemCount}</span>
    </div>
  );
};

export default CartWidget;
