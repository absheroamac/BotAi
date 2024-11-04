import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import MyProfile from "../assets/myprofile.png";
import BotProfile from "../assets/botprofile.png";

export const ChatCard = ({ type, message, time }) => {
  const isBot = type === "bot";
  const profile = isBot ? BotProfile : MyProfile;
  const name = isBot ? "Soul AI" : "You";

  return (
    <Box
      display={"flex"}
      width={"100%"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      p={2}
      sx={{
        backgroundColor: "#D7C7F421",
        boxShadow: "-4px 4px 15px 0px #0000001A",
        borderRadius: "20px",
      }}
      gap={3}
    >
      <Box>
        <img src={profile} alt="Profile Picture" style={{ width: "100%" }} />
      </Box>
      <Stack gap={1}>
        <Stack>
          <Typography variant="h1" fontSize={"16px"}>
            {name}
          </Typography>
          <Typography variant="body1">{message}</Typography>
        </Stack>
        <Typography variant="body1" fontSize={"12px"}>
          {time}
        </Typography>
      </Stack>
    </Box>
  );
};
