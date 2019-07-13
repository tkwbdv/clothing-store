export const types = {
  TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
  ADD_ITEM: "ADD_ITEM"
};

export const toggleCartHidden = () => ({
  type: types.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: types.ADD_ITEM,
  payload: item
});