import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "./CustomButton";
import CartItem from "./CartItem";
import { selectCartItems } from "../selectors/cartSelectors";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown" >
    {cartItems.length ? (
      <div className="cart-items">
        {cartItems
          .map(item => <CartItem key={item.id} item={item} />)}
      </div>) :
      <div className="cart-empty">
        <span>No items in shopping cart</span>
      </div>}
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div >
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);