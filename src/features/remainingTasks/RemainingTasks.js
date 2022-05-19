import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { selectTasks } from "../task/taskSlice";
import { selectRemainingTasks, updRemainingTasks } from "./remainingTasksSlice";

const RemainingTasks = () => {
  const tasks = useSelector(selectTasks);
  const remainingTasks = useSelector(selectRemainingTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    // Get the number of incomplete tasks
    const incompleteTasksNum = tasks.filter((task) => !task.completed).length;

    dispatch(updRemainingTasks(incompleteTasksNum));
  }, [dispatch, tasks]);

  return (
    <Box sx={{ textAlign: "center", paddingTop: "0.5em" }}>
      <Typography variant="h5" component="h5">
        {remainingTasks > 1
          ? `${remainingTasks} Tasks Left`
          : `${remainingTasks} Task Left`}
      </Typography>
    </Box>
  );
};

export default RemainingTasks;
