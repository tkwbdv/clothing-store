export const types = {
  TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  CLEAR_ITEM_FROM_CART: "CLEAR_ITEM_FROM_CART",
  CLEAR_CART: "CLEAR_CART"
};

export const toggleCartHidden = () => ({
  type: types.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: types.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: types.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: types.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const clearCart = () => ({
  type: types.CLEAR_CART
});
