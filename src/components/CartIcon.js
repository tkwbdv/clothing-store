import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../actions/cartActions";

import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg"
import { selectCartItemsCount } from "../selectors/cartSelectors";

const CartIcon = ({ toggleCartHidden, cartItemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden} >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  cartItemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);