import React from "react";
import { Box, Typography } from "@mui/material";

export const SugessionCard = ({ title, body }) => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      sx={{
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: "0px 4px 10px 0px #00000026",
      }}
      p={3}
      py={4}
      gap={1}
    >
      <Typography variant="h1" sx={{ fontSize: "20px" }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: "#00000080" }}>
        {body}
      </Typography>
    </Box>
  );
};
