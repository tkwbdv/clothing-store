import React from "react";

import CustomButton from "./CustomButton";

const CartDropdown = ({ isCartHidden }) => (
  <div className="cart-dropdown" >
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div >
);

export default CartDropdown;