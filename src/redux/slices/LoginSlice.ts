import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { setUserRole } from "./UsuarioSlice";

type login = {
  id: number;
  name: string;
};

type InitialState = {
  logins: Login[];
};

const initialState: InitialState = {
  logins: [],
};

export const toDoSlice = createSlice({
  name: "login",
  initialState,
  
  reducers: {

    setUserRole: (state: PayloadAction<"manager"|"User"> ) => {
      if(state.user){state.user.role=action.payload}
    },

  },
});


export const { saveTasks,adddatos,deletdato } = toDoSlice.actions;


export default toDoSlice.reducer;