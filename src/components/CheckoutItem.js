import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart, removeItem, addItem } from "../actions/cartActions";

const CheckoutItem = ({ item, clearItemFromCart, removeItem, addItem }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => removeItem(item)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => addItem(item)}
        >
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(item)}
      >
        &#10005;
    </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(undefined, mapDispatchToProps)(CheckoutItem);