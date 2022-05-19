import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

const HasError = () => {
  return (
    <Box sx={{ padding: "0.5em" }}>
      <Alert variant="filled" severity="error">
        City Not Found!
      </Alert>
    </Box>
  );
};

export default HasError;
