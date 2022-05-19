import { useSelector } from "react-redux";

import RemainingTasks from "../features/remainingTasks/RemainingTasks";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { selectTasks } from "../features/task/taskSlice";

const TasksPage = () => {
  const tasks = useSelector(selectTasks);

  return (
    <>
      {tasks.length ? <RemainingTasks /> : ""}
      <TaskList />
      <TaskForm />
    </>
  );
};

export default TasksPage;
