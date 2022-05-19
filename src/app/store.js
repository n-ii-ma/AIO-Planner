import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from "../features/task/taskSlice";

export const store = configureStore({
  reducer: {
    task: taskSliceReducer,
  },
});
