import { Box, Stack, Typography, Rating } from "@mui/material";
import React, { useState } from "react";

import MyProfile from "../assets/myprofile.png";
import BotProfile from "../assets/botprofile.png";
import { Link } from "react-router-dom";
import Like from "../assets/like.png";
import Dislike from "../assets/dislike.png";

export const HistoryChatCard = ({
  type,
  message,
  time,
  review,
  rating,
  handleReview,
  id,
}) => {
  const [hidden, setHidden] = useState(true);
  const isBot = type === "bot";
  const profile = isBot ? BotProfile : MyProfile;
  const name = isBot ? "Soul AI" : "You";

  console.log(review);

  const reviewOption = !hidden && type === "bot";
  const IsReview = review !== "" && review;
  const starRating = rating !== null && rating !== undefined && rating !== "";

  const openFeedback = () => {
    handleReview(id, "feedback");
  };

  const openReview = () => {
    handleReview(id, "review");
    console.log(id);
  };

  return (
    <Box
      display={"flex"}
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
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
              <Link onClick={openReview}>
                <img src={Like} alt="Like Button" />
              </Link>
              <Link onClick={openFeedback}>
                <img src={Dislike} alt="Dislike Button" />
              </Link>
            </Box>
          )}
          {starRating && (
            <Rating
              name="read-only"
              value={Number(rating)}
              readOnly
              sx={{ color: "black" }}
              size="small"
            />
          )}
        </Box>
        {IsReview && (
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
