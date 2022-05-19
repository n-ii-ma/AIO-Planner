import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import "../App.css";
import Nav from "../components/Nav";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container component="main" maxWidth="sm">
          <Card
            raised
            sx={{
              margin: "0 auto",
              padding: "1em",
              backgroundColor: "#f7f7f7",
            }}
          >
            <TaskList />
            <TaskForm />
            <Nav />
          </Card>
          <Typography
            textAlign="center"
            variant="subtitle2"
            component="p"
            paddingTop="1em"
          >
            &copy; {new Date().getFullYear()} AIO Planner
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default App;
