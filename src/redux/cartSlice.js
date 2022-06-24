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
    removeFromCart(state, action) {
      return state.filter(
        (product) => product._id === action.payload.product._id
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
