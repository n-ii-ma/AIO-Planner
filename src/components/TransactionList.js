import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import { selectTransactions } from "../features/transaction/transactionSlice";
import Transaction from "../features/transaction/Transaction";

const TransactionList = () => {
  const transactions = useSelector(selectTransactions);

  return (
    <Box sx={{ width: "300px", marginTop: "2em" }}>
      <Typography
        variant="h6"
        component="h6"
        sx={{ borderBottom: "1px solid #dedede" }}
      >
        History
      </Typography>
      {!transactions.length ? (
        <Box>
          <Typography variant="body1" component="p" sx={{ marginTop: "0.5em" }}>
            Nothing to Show
          </Typography>
        </Box>
      ) : (
        transactions.map((transaction) => (
          <Box
            key={transaction.id}
            sx={{ textAlign: "left", padding: "0.5em" }}
          >
            <Card
              sx={{
                padding: "0.5em",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRight:
                  transaction.amount > 0
                    ? "5px solid #2ecc71"
                    : "5px solid #c0392b",
              }}
            >
              <Transaction transaction={transaction} />
            </Card>
          </Box>
        ))
      )}
    </Box>
  );
};

export default TransactionList;
