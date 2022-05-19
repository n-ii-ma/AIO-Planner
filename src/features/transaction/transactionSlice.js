import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: [],
  reducers: {
    addTransaction: (state, action) => {
      const newTransaction = {
        id: uuidv4(),
        text: action.payload.text,
        amount: +action.payload.amount,
      };
      state.push(newTransaction);
    },
    deleteTransaction: (state, action) => {
      const transactionIndex = state.findIndex(
        (transaction) => transaction.id === action.payload.id
      );
      state.splice(transactionIndex, 1);
    },
  },
});

// Selector
export const selectTransactions = (state) => state.transaction;

// Actions
export const { addTransaction, deleteTransaction } = transactionSlice.actions;

// Reducer
export default transactionSlice.reducer;
