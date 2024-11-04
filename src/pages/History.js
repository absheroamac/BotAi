import { Typography, Box, Stack, TextField } from "@mui/material";
import React from "react";
import LogoIcon from "../assets/logoicon.png";
import styles from "./Landing.module.css";
import { SugessionCard } from "../components/SugessionCard";
import { Button } from "../components/common/Button";
import { ChatCard } from "../components/ChatCard";
import { HistoryCard } from "../components/HistoryCard";

const data = [
  {
    request: {
      message: "Hi How are you",
      time: "12:30",
    },
    response: {
      message: "I am doing Good",
      time: "11:30",
      rating: "",
      review: "",
    },
  },

  {
    request: {
      message: "Are you cool?",
      time: "12:30",
    },
    response: {
      message: "Yhes I am super Cool",
      time: "11:30",
      rating: "3",
      review: "Can be better",
    },
  },
];

export const History = () => {
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
        {data.map((item) => (
          <HistoryCard data={item} />
        ))}
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
