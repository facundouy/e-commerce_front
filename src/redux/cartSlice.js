import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.map((product) => {
        console.log(product);
        // if (product._id === action.payload.productId) {
        // }
      });
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter(
        (product) => product._id === action.payload.product._id
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
