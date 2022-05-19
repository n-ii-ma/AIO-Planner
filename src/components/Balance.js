import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { selectTransactions } from "../features/transaction/transactionSlice";

const Balance = () => {
  const transactions = useSelector(selectTransactions);

  // Get the amount of each transaction
  const transactionAmount = transactions.map(
    (transaction) => transaction.amount
  );

  // Get the total amount
  const total = transactionAmount.reduce((acc, item) => (acc += item), 0);

  // Minus sign
  const sign = total < 0 && "-";

  return (
    <Box sx={{ width: "300px" }}>
      <Typography variant="h6" component="h6">
        Your Balance
      </Typography>
      <Typography variant="h4" component="h4" sx={{ fontWeight: "500" }}>
        {sign}${Math.abs(total).toFixed(2)}
      </Typography>
    </Box>
  );
};

export default Balance;
