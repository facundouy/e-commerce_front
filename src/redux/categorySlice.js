import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    storeCategories(state, action) {
      return (state = action.payload);
    },
  },
});

export const { storeCategories } = categorySlice.actions;
export default categorySlice.reducer;
