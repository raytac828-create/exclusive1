import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import wishlistReducer from "./wishlistSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
