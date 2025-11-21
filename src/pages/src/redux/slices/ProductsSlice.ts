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
  name: "toDo",
  initialState,
  
  reducers: {

    saveTasks: (state, action: PayloadAction<Task>) => {
      state.tasks = [...state.tasks, action.payload];
    },
    adddatos: (state, action: PayloadAction<Dato>) => {
      state.datos = [...state.datos, action.payload];
    },
    deletdato: (state, action: PayloadAction<number| number>) => {
      state.datos = [...state.datos, action.payload];
    },
  },
});


export const { saveTasks } = toDoSlice.actions;


export default toDoSlice.reducer;