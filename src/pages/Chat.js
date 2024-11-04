import { Typography, Box, Stack, TextField } from "@mui/material";
import React from "react";
import LogoIcon from "../assets/logoicon.png";
import styles from "./Landing.module.css";
import { SugessionCard } from "../components/SugessionCard";
import { Button } from "../components/common/Button";
import { ChatCard } from "../components/ChatCard";

export const Chat = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-end"}
      height={"100vh"}
      p={4}
      gap={4}
    >
      <Stack gap={1}>
        <ChatCard message={"Hi how are you"} time={"14:06"} type={"you"} />
        <ChatCard message={"Hi how are you"} time={"14:06"} type={"bot"} />
      </Stack>
      <Box display={"flex"} gap={2}>
        <TextField
          id="filled"
          fullWidth
          multiline
          maxRows={4}
          InputProps={{
            sx: {
              borderRadius: "5px",
              backgroundColor: "white",
              maxHeight: "50px",
            },
          }}
        />

        <Button variant={"thin"} content={"Ask"} />
        <Button variant={"thin"} content={"Save"} />
      </Box>
    </Box>
  );
};