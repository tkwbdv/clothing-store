import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "./CustomButton";
import CartItem from "./CartItem";
import { selectCartItems } from "../selectors/cartSelectors";
import { toggleCartHidden } from "../actions/cartActions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleRedirect = () => {
    dispatch(toggleCartHidden());
    history.push("/checkout");
  }

  return (
    <div className="cart-dropdown" >
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems
            .map(item => <CartItem key={item.id} item={item} />)}
        </div>) :
        <div className="empty-message">
          <span>Your cart is empty</span>
        </div>}
      <CustomButton onClick={handleRedirect}>GO TO CHECKOUT</CustomButton>
    </div >
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));