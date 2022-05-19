import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Box from "@mui/material/Box";

import { toggleComplete, removeTask } from "./taskSlice";

const label = { inputProps: { "aria-label": "Complete Checkbox" } };

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Typography
        variant="body1"
        component="p"
        sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
      >
        {task.text}
      </Typography>
      <Box>
        <Checkbox
          {...label}
          icon={<CheckCircleOutlinedIcon />}
          checkedIcon={<CheckCircleIcon />}
          color="success"
          onChange={() => dispatch(toggleComplete(task))}
        />
        <IconButton
          aria-label="delete"
          onClick={() => dispatch(removeTask(task))}
        >
          <DeleteIcon color="error" />
        </IconButton>
      </Box>
    </>
  );
};

export default Task;
