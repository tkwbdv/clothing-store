import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "./CartItem";
import { selectCartItems } from "../selectors/cartSelectors";
import { toggleCartHidden } from "../actions/cartActions";

import {
  EmptyMessageContainer,
  CartItemsContainer,
  CartDropdownContainer,
  CustomButtonContainer
} from "../styles/components/_CartDropdown";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleRedirect = () => {
    dispatch(toggleCartHidden());
    history.push("/checkout");
  };

  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <CartItemsContainer>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </CartItemsContainer>
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
      <CustomButtonContainer onClick={handleRedirect}>
        GO TO CHECKOUT
      </CustomButtonContainer>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
