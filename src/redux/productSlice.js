import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    async getProducts() {
      const response = await Axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/products`
      );
      console.log(response);
      return [...response.data];
    },
  },
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
