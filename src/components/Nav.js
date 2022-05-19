import { useState } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ThermostatIcon from "@mui/icons-material/Thermostat";

const Nav = () => {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ maxWidth: 600, marginTop: "1em" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          LinkComponent={NavLink}
          to="/"
          label="Tasks"
          icon={<TaskAltIcon />}
        />
        <BottomNavigationAction
          LinkComponent={NavLink}
          to="/expenses"
          label="Expenses"
          icon={<AccountBalanceWalletIcon />}
        />
        <BottomNavigationAction
          LinkComponent={NavLink}
          to="/weather"
          label="Weather"
          icon={<ThermostatIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Nav;
