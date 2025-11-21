import { configureStore } from "@reduxjs/toolkit";
import{ userSlice } from "./slices/UsuarioSlice";
import { toDoSlice } from "./slices/ProductsSlice";



export const store = configureStore({
  reducer: {
    role:userSlice 
    todo: toDoSlice

  },
 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;