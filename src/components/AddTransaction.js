import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";

import { addTransaction } from "../features/transaction/transactionSlice";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    dispatch(
      addTransaction({
        text,
        amount,
      })
    );

    setText("");
    setAmount("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 3, width: "300px" }}
    >
      <Typography
        variant="h6"
        component="h6"
        sx={{ borderBottom: "1px solid #dedede", fontSize: "1.2rem" }}
      >
        Add New Transaction
      </Typography>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        margin="normal"
        required
        fullWidth
        id="text"
        label="Enter Text"
        name="text"
      />
      <TextField
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        margin="normal"
        type="number"
        required
        fullWidth
        id="amount"
        label="Enter Amount"
        name="amount"
      />
      <InputLabel>(Negative: Expense / Positive: Income)</InputLabel>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, fontSize: { md: "1rem" } }}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddTransaction;
