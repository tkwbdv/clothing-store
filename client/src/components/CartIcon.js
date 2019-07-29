import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../actions/cartActions";

import { selectCartItemsCount } from "../selectors/cartSelectors";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer
} from "../styles/components/_CartIcon";

const CartIcon = ({ toggleCartHidden, cartItemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer />
    <ItemCountContainer className="item-count">
      {cartItemCount}
    </ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  cartItemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
