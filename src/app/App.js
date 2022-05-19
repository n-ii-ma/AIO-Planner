import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

import "../App.css";
import TaskForm from "../components/TaskForm";
import Nav from "../components/Nav";

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
            <TaskForm />
            <Nav />
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default App;
