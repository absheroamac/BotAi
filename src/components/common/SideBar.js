import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/Group 1000011095.png";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Edit from "../../assets/edit.png";
import { Button } from "./Button";

import CloseIcon from "@mui/icons-material/Close";

export const SideBar = ({ setResponses, popup, setOpen }) => {
  const navigate = useNavigate();

  const handleAction = () => {
    navigate("/history");
  };
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
        <Link
          style={{ textDecoration: "none" }}
          onClick={() => setResponses([])}
        >
          <Box display={"flex"} gap={1}>
            <Typography variant="h3" sx={{ fontSize: "20px" }}>
              New Chat
            </Typography>
            <img
              src={Edit}
              alt="Edit Icons"
              style={{ width: "24px", height: "24px" }}
            />
          </Box>
        </Link>
        {popup && (
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      <Box p={2}>
        <Button
          variant={"bold"}
          content={"Past Conversations"}
          action={handleAction}
        />
      </Box>
    </Stack>
  );
};
