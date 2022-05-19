import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { getWeather } from "../features/weather/weatherSlice";

const WeatherForm = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const apiAddress = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${process.env.REACT_APP_KEY}`;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input) return;

    dispatch(getWeather(apiAddress));
  };

  return (
    <Box component="form" onSubmit={handleSearch} sx={{ mt: 1 }}>
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="search"
        margin="normal"
        required
        fullWidth
        id="city"
        label="City Name"
        name="city"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, fontSize: { md: "1rem" } }}
      >
        Search
      </Button>
    </Box>
  );
};

export default WeatherForm;
