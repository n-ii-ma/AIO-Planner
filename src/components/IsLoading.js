import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const IsLoading = () => {
  return (
    <Box display="flex" justifyContent="center" sx={{ padding: "1em" }}>
      <CircularProgress />
    </Box>
  );
};

export default IsLoading;
