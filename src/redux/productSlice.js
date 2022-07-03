import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "product",
	initialState: [],
	reducers: {
		storeProducts(state, action) {
			return (state = action.payload);
		},
	},
});

export const { storeProducts } = productSlice.actions;
export default productSlice.reducer;
