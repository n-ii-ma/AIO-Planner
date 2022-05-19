import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { selectTransactions } from "../features/transaction/transactionSlice";

const IncomeExpenses = () => {
  const transactions = useSelector(selectTransactions);

  // Get the amount of each transaction
  const transactionAmount = transactions.map(
    (transaction) => transaction.amount
  );

  // Add the positive income values together
  const income = transactionAmount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // Add the negative expense values together
  const expense = (
    transactionAmount
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <Card
      sx={{
        padding: "0.5em 0",
        marginTop: "1em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          padding: "0 2em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRight: "1px solid #dedede",
        }}
      >
        <Typography variant="h6" component="h6" sx={{ fontSize: "1.2rem" }}>
          Income
        </Typography>
        <Typography variant="h6" component="h6" sx={{ color: "#2ecc71" }}>
          ${income}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "0 2em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" component="h6" sx={{ fontSize: "1.2rem" }}>
          Expense
        </Typography>
        <Typography variant="h6" component="h6" sx={{ color: "#c0392b" }}>
          ${expense}
        </Typography>
      </Box>
    </Card>
  );
};

export default IncomeExpenses;
