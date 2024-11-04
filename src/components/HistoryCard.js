import { Box } from "@mui/material";
import React from "react";
import { HistoryChatCard } from "./HistoryChatCard";

export const HistoryCard = ({ data }) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)",
        borderRadius: "10px",
      }}
    >
      <HistoryChatCard {...data.request} type={"you"} />
      <HistoryChatCard {...data.response} type={"bot"} />
    </Box>
  );
};
