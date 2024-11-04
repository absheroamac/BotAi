import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/Group 1000011095.png";
import { Link } from "react-router-dom";
import Edit from "../../assets/edit.png";
import { Button } from "./Button";

export const SideBar = () => {
  return (
    <Stack gap={0}>
      <Box
        sx={{ backgroundColor: "secondary.main" }}
        p={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <img src={Logo} alt="Logo" />
        <Link style={{ textDecoration: "none" }}>
          <Box display={"flex"} gap={1}>
            <Typography variant="h3" sx={{ fontSize: "20px" }}>
              New Chat
            </Typography>
            <img src={Edit} alt="Edit Icons" />
          </Box>
        </Link>
      </Box>
      <Box p={2}>
        <Button variant={"bold"} content={"Past Conversations"} />
      </Box>
    </Stack>
  );
};
