import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
         name: "user", 
         initialState: {}, 
         reducers: {
            storeToken(state,action){
                console.log(action.payload.token.accesToken)
                state.token = action.payload.token.accesToken
            }
         } 
        });

export const {storeToken} = userSlice.actions;
export default userSlice.reducer;
