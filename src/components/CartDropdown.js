import React from "react";
import { connect } from "react-redux";

import CustomButton from "./CustomButton";
import CartItem from "./CartItem";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown" >
    <div className="cart-items">
      {cartItems
        .map(item => <CartItem key={item.id} item={item} />)}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div >
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);