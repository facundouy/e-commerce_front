import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      console.log(action.payload.qty);

      const itemInList = state.find(
        (item) => item._id === action.payload.product._id
      );

      if (!itemInList) {
        action.payload.product.quantity = action.payload.qty;
        state.push(action.payload.product);
      } else {
        itemInList.quantity = itemInList.quantity + action.payload.qty;
      }
    },
    incrementQuantity(state, action) {
      const product = state.find(
        (item) => item._id === action.payload.product._id
      );
      if (product) {
        product.quantity = product.quantity + 1;
      }
    },
    decrementQuantity(state, action) {
      const product = state.find(
        (item) => item._id === action.payload.product._id
      );
      if (product) {
        product.quantity = product.quantity - 1;
      }
    },
    hola(state, action) {
      return state.filter((item) => item.quantity > 0);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item._id !== action.payload.product._id);
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  hola,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
