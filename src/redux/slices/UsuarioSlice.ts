
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

 export type UserType = {
rol:"manager'" | "customer"
};


type InitialState={
  userType = userType
};
const InitialState:InitialState={
    userType ="user"
}


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    setNameState: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setUserType: (state, action: PayloadAction<UserType>) => {
      state.userType = action.payload;
    },
    setUserRole: (state: PayloadAction<"manager"|"User"> ) => {
      if(state.user){state.user.role=action.payload}
    },
  },
});


export const { setNameState,setUserRole,setUserType} = userSlice.actions;


export default userSlice.reducer;