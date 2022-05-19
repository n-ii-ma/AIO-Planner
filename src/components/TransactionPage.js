import Box from "@mui/material/Box";

import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

const TransactionPage = () => {
  return (
    <Box
      sx={{
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </Box>
  );
};

export default TransactionPage;
