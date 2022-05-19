import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TaskForm = () => {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input || !date) return;

    setInput("");
    setDate("");
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
        label="Add Task..."
        name="task"
        autoComplete="task"
      />
      <TextField
        value={date}
        onChange={(e) => setDate(e.target.value)}
        margin="normal"
        type="datetime-local"
        required
        fullWidth
        id="task"
        InputLabelProps={{ shrink: true }}
        label="Add Date..."
        name="task"
        autoComplete="task"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add
      </Button>
    </Box>
  );
};

export default TaskForm;
