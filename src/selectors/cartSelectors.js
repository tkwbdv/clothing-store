import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  items => items.reduce((acc, item) => acc + item.quantity, 0));

export const selectCartTotal = createSelector(
  [selectCartItems],
  items => items.reduce((acc, { quantity, price }) => acc + quantity * price, 0)
);