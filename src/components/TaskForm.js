import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { addTask } from "../features/task/taskSlice";

const TaskForm = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    dispatch(addTask(input));

    setInput("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        margin="normal"
        required
        fullWidth
        id="task"
        label="Add Task"
        name="task"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, fontSize: { md: "1rem" } }}
      >
        Add
      </Button>
    </Box>
  );
};

export default TaskForm;
