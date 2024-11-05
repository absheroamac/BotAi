import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import MyProfile from "../assets/myprofile.png";
import BotProfile from "../assets/botprofile.png";
import { Link } from "react-router-dom";
import Like from "../assets/like.png";
import Dislike from "../assets/dislike.png";

export const ChatCard = ({
  type,
  message,
  time,
  isBackground = "fill",
  handleReview,
  id,
}) => {
  const [hidden, setHidden] = useState(true);
  const isBot = type === "bot";
  const profile = isBot ? BotProfile : MyProfile;
  const name = isBot ? "Soul AI" : "You";
  const background = isBackground === "fill" ? "#D7C7F421" : "none";

  const openFeedback = () => {
    handleReview(id, "feedback");
  };

  const openReview = () => {
    handleReview(id, "review");
    console.log(id);
  };

  return (
    <Box
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
      display={"flex"}
      width={"100%"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      p={2}
      sx={{
        backgroundColor: background,
        boxShadow: "-4px 4px 15px 0px #0000001A",
        borderRadius: "20px",
      }}
      gap={3}
    >
      <Box width={"65px"}>
        <img src={profile} alt="Profile Picture" style={{ width: "65px" }} />
      </Box>
      <Stack gap={1} flexGrow={1}>
        <Stack>
          <Typography variant="h1" fontSize={"16px"}>
            {name}
          </Typography>
          <Typography variant="body1">{message}</Typography>
        </Stack>
        <Box display={"flex"} gap={4}>
          <Typography variant="body1" fontSize={"12px"}>
            {time}
          </Typography>
          {!hidden && (
            <Box display={"flex"} gap={2}>
              <Link onClick={openReview}>
                <img src={Like} alt="Like Button" />
              </Link>
              <Link onClick={openFeedback}>
                <img src={Dislike} alt="Dislike Button" />
              </Link>
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
};
