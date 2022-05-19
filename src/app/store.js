import { configureStore } from "@reduxjs/toolkit";
import remainingTasksSliceReducer from "../features/remainingTasks/remainingTasksSlice";
import taskSliceReducer from "../features/task/taskSlice";

export const store = configureStore({
  reducer: {
    remainingTasks: remainingTasksSliceReducer,
    task: taskSliceReducer,
  },
});
