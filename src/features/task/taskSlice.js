import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        text: action.payload.text,
        date: action.payload.date,
        completed: false,
      };
      
      state.push(newTask);
    },
  },
});

// Selector
export const selectTasks = (state) => state.task;

// Actions
export const { addTask } = taskSlice.actions;

// Reducer
export default taskSlice.reducer;
