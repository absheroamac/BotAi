import { Box, Stack, Typography, Rating } from "@mui/material";
import React, { useState } from "react";

import MyProfile from "../assets/myprofile.png";
import BotProfile from "../assets/botprofile.png";
import { Link } from "react-router-dom";
import Like from "../assets/like.png";
import Dislike from "../assets/dislike.png";

export const HistoryChatCard = ({ type, message, time, review, rating }) => {
  const [hidden, setHidden] = useState(true);
  const isBot = type === "bot";
  const profile = isBot ? BotProfile : MyProfile;
  const name = isBot ? "Soul AI" : "You";

  const reviewOption = review === "" ? true : false;
  const starRating = rating !== null && rating !== undefined && rating !== "";

  return (
    <Box
      display={"flex"}
      width={"100%"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      p={2}
      sx={{
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
        <Box display={"flex"} gap={4}>
          <Typography variant="body1" fontSize={"12px"}>
            {time}
          </Typography>
          {reviewOption && (
            <Box display={"flex"} gap={2}>
              <Link>
                <img src={Like} alt="Like Button" />
              </Link>
              <Link>
                <img src={Dislike} alt="Dislike Button" />
              </Link>
            </Box>
          )}
          {starRating && (
            <Rating
              name="read-only"
              value={3}
              readOnly
              sx={{ color: "black" }}
              size="small"
            />
          )}
        </Box>
        {starRating && (
          <Box>
            <Typography variant="body1">
              <span style={{ fontWeight: 700 }}>Feedback</span>: {review}{" "}
            </Typography>
          </Box>
        )}
      </Stack>
    </Box>
  );
};
