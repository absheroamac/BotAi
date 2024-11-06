import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useOutletContext } from "react-router-dom";

const NavBar = () => {
  const { setOpen } = useOutletContext();
  return (
    <Box display={"flex"} gap={2}>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h1" fontSize={"28px"} color="primary.main">
        Bot AI
      </Typography>
    </Box>
  );
};

export default NavBar;
