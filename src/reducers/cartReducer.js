import { types } from "../actions/cartActions";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case types.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case types.ADD_ITEM:
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

      if (itemIndex < 0) {  // not already in cart
        const newItem = {
          ...action.payload,
          quantity: 1
        };
        return {
          ...state,
          cartItems: [...state.cartItems, newItem]
        };
      } else {  // already in cart
        const newCartItems = [...state.cartItems];
        newCartItems[itemIndex].quantity++;
        return {
          ...state,
          cartItems: newCartItems
        };
      }

    default:
      return state;
  }
}

export default cartReducer;