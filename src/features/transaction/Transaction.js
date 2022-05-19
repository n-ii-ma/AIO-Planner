import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { deleteTransaction } from "./transactionSlice";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();

  // Plus or minus sign
  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <>
      <Typography variant="body1" component="p" sx={{ fontSize: "1.1rem" }}>
        <IconButton
          aria-label="delete"
          onClick={() => dispatch(deleteTransaction(transaction))}
          sx={{ padding: "0 5px 0 0" }}
        >
          <DeleteIcon color="error" fontSize="small" />
        </IconButton>
        {transaction.text}
      </Typography>
      <Typography variant="body1" component="p" sx={{ fontSize: "1.1rem" }}>
        {sign}${Math.abs(transaction.amount).toFixed(2)}
      </Typography>
    </>
  );
};

export default Transaction;
