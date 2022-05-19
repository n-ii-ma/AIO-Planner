import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import { selectTasks } from "../features/task/taskSlice";
import Task from "../features/task/Task";

const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <Box sx={{ margin: "1em 0", textAlign: "center" }}>
      {!tasks.length ? (
        <Box>
          <Typography variant="h5" component="h5">
            No Tasks to Show
          </Typography>
        </Box>
      ) : (
        tasks.map((task) => (
          <Box key={task.id} sx={{ textAlign: "left", padding: "0.5em" }}>
            <Card
              sx={{
                padding: "0.5em",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                opacity: task.completed && "0.5",
              }}
            >
              <Task task={task} />
            </Card>
          </Box>
        ))
      )}
    </Box>
  );
};

export default TaskList;
