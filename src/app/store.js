import { configureStore } from "@reduxjs/toolkit";

import remainingTasksSliceReducer from "../features/remainingTasks/remainingTasksSlice";
import taskSliceReducer from "../features/task/taskSlice";
import weatherSliceReducer from "../features/weather/weatherSlice";
import transactionSliceReducer from "../features/transaction/transactionSlice";

// Get sate from Local Storage
const preloadedState = localStorage.getItem("AIO")
  ? JSON.parse(localStorage.getItem("AIO"))
  : {};

export const store = configureStore({
  reducer: {
    remainingTasks: remainingTasksSliceReducer,
    task: taskSliceReducer,
    weather: weatherSliceReducer,
    transaction: transactionSliceReducer,
  },
  preloadedState,
});

// Save sate to Local Storage
store.subscribe(() =>
  localStorage.setItem("AIO", JSON.stringify(store.getState()))
);
