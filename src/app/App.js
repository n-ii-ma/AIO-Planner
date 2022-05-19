import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import Nav from "../components/Nav";
import TasksPage from "../components/TasksPage";
import TransactionPage from "../components/TransactionPage";
import WeatherPage from "../components/WeatherPage";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container component="main" maxWidth="xs">
          <Card
            raised
            sx={{
              margin: "0 auto",
              padding: "1em",
              backgroundColor: "#f7f7f7",
            }}
          >
            <Routes>
              <Route path="/" element={<TasksPage />} />
              <Route path="/wallet" element={<TransactionPage />} />
              <Route path="/weather" element={<WeatherPage />} />
            </Routes>
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
