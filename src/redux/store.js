import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

export const store = configureStore(
  {
    reducer: {
      user: userReducer,
      cart: cartReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Esto es para que funcione el redux devtools
);
