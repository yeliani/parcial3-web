import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Dato = {
  id: number;
  title: string;
};

type InitialState = {
  datos: Dato[];
};

const initialState: InitialState = {
  datos: [],
};

export const toDoSlice = createSlice({
  name: "Dato",
  initialState,
  
  reducers: {

    saveTasks: (state, action: PayloadAction<Dato>) => {
      state.datos = [...state.datos, action.payload];
    },
    adddatos: (state, action: PayloadAction<Dato>) => {
      state.datos = [...state.datos, action.payload];
    },
    deletdato: (state, action: PayloadAction<number| number>) => {
      state.datos = state.datos.filter((dato)=>dato.id !== action.payload);
    },
    cre

  },
});


export const { saveTasks,adddatos,deletdato } = toDoSlice.actions;


export default toDoSlice.reducer;