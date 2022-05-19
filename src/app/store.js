import { configureStore } from "@reduxjs/toolkit";
import remainingTasksSliceReducer from "../features/remainingTasks/remainingTasksSlice";
import taskSliceReducer from "../features/task/taskSlice";
import weatherSliceReducer from "../features/weather/weatherSlice";
import transactionSliceReducer from "../features/transaction/transactionSlice";

export const store = configureStore({
  reducer: {
    remainingTasks: remainingTasksSliceReducer,
    task: taskSliceReducer,
    weather: weatherSliceReducer,
    transaction: transactionSliceReducer,
  },
});
