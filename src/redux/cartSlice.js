import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const itemInList = state.find(
        (item) => item._id === action.payload.product._id
      );

      if (!itemInList) {
        const newProduct = { ...action.payload.product };
        newProduct.quantity = action.payload.qty;
        state.push(newProduct);
      } else {
        itemInList.quantity = itemInList.quantity + action.payload.qty;
      }
    },
    incrementQuantity(state, action) {
      const product = state.find(
        (item) => item._id === action.payload.product._id
      );
      product.quantity += 1;
    },
    decrementQuantity(state, action) {
      const product = state.find(
        (item) => item._id === action.payload.product._id
      );
      if (product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item._id !== action.payload.product._id);
    },
    resetCart(state, action) {
      return [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
