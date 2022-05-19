import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
      };

      state.push(newTask);
    },
    toggleComplete: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      });
    },
    removeTask: (state, action) => {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      state.splice(taskIndex, 1);
    },
  },
});

// Selector
export const selectTasks = (state) => state.task;

// Actions
export const { addTask, toggleComplete, removeTask } = taskSlice.actions;

// Reducer
export default taskSlice.reducer;
