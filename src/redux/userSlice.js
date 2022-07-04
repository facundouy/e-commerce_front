import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {},
	reducers: {
		storeToken(state, action) {
			if (action.payload.userInfo.accesToken) {
				state.token = action.payload.userInfo.accesToken;
				state.user = action.payload.userInfo.user;
			} else {
				return state;
			}
		},
		logout(state) {
			state.token = null;
			state.user = null;
		},
	},
});

export const { storeToken, logout } = userSlice.actions;
export default userSlice.reducer;
