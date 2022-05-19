import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import {
  selectWeatherToday,
  selectWeatherIsLoading,
  selectWeatherHasError,
} from "./weatherSlice";
import IsLoading from "../../components/IsLoading";
import HasError from "../../components/HasError";

const Weather = () => {
  const weatherToday = useSelector(selectWeatherToday);
  const weatherIsLoading = useSelector(selectWeatherIsLoading);
  const weatherHasError = useSelector(selectWeatherHasError);

  // If weather is being loaded or has error show corresponding loading and error pages respectively
  if (weatherIsLoading) return <IsLoading />;
  if (weatherHasError) return <HasError />;

  return (
    <>
      {!weatherToday?.main ? (
        ""
      ) : (
        <Box display="flex" justifyContent="center" sx={{ padding: "1em" }}>
          <Card
            sx={{
              padding: "1em",
              width: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              justifySelf: "center",
            }}
          >
            <Typography
              variant="body1"
              component="p"
              marginBottom={2}
              sx={{
                fontSize: { xs: "1.4rem", md: "1.5rem" },
                alignSelf: "flex-start",
              }}
            >
              {weatherToday.name}, {weatherToday.sys.country}
            </Typography>
            <Typography variant="h4" component="h4" marginBottom={2}>
              {Math.round(weatherToday.main.temp)}°C
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: { xs: "1.4rem", md: "1.5rem" },
                alignSelf: "flex-end",
              }}
            >
              {weatherToday.weather[0].main}
            </Typography>
          </Card>
        </Box>
      )}
    </>
  );
};

export default Weather;
