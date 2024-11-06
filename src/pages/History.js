import {
  Typography,
  Box,
  Stack,
  TextField,
  Select,
  MenuItem,
  Rating,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LogoIcon from "../assets/logoicon.png";
import styles from "./Landing.module.css";
import { SugessionCard } from "../components/SugessionCard";
import { Button } from "../components/common/Button";
import { ChatCard } from "../components/ChatCard";
import { HistoryCard } from "../components/HistoryCard";
import { Model } from "../components/model/Model";

export const History = () => {
  const [chatList, setChatList] = useState([]);
  const [openReview, setOpenReview] = useState(false);
  const [reviewID, setReviewID] = useState(null);
  const [modelType, setModelType] = useState("");
  const [filteredChat, setFilteredChat] = useState([]);

  const [rating, setRating] = useState(0);

  const handleChange = (event) => {
    setRating(event.target.value);
  };

  const convertDate = (Inputdate) => {
    const today = new Date();
    const date = new Date(Inputdate);

    if (
      today.getDate() === date.getDate() &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear()
    ) {
      return "Today's Chat";
    } else if (
      today.getDate() - 1 === date.getDate() &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear()
    ) {
      return "Yesterday's Chat";
    } else {
      return `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`;
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chatHistory"));
    if (data) {
      setChatList(data);
      setFilteredChat(data);
    }
  }, [openReview]);

  const handleReview = (id, type) => {
    setOpenReview(true);
    setModelType(type);
    setReviewID(id);
  };

  const filterData = (data) => {
    if (rating === 0) {
      return data;
    }
    return data.filter((item) => item.response.rating === rating);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      height={"100%"}
      pt={4}
      px={4}
      gap={4}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center" },
          gap: { xs: "1rem" },
          paddingRight: { xs: "0px", md: "16px" },
        }}
      >
        <Box>
          <Typography variant="h3">Conversation History</Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={2}
          sx={{
            justifyContent: { xs: "space-between", md: "center" },
          }}
        >
          <Typography fontSize={"16px"}>Filter by Rating</Typography>
          <Select
            value={rating}
            onChange={handleChange}
            sx={{ width: { xs: "150px", md: "200px" } }}
          >
            <MenuItem value={0}>
              <em>No Filter</em>
            </MenuItem>
            <MenuItem value={1}>1 Star Rated</MenuItem>
            <MenuItem value={2}>2 Star Rated</MenuItem>
            <MenuItem value={3}>3 Star Rated</MenuItem>
            <MenuItem value={4}>4 Star Rated</MenuItem>
            <MenuItem value={5}>5 Star Rated</MenuItem>
          </Select>
        </Box>
      </Box>
      <Stack gap={1} overflow={"scroll"} height={"100%"}>
        {chatList.length > 0 &&
          chatList.map((item) => {
            console.log(item);
            return (
              <Stack gap={1}>
                {filterData(item.data).length !== 0 && (
                  <Typography variant="h2" fontSize={"20px"}>
                    {convertDate(item.date)}
                  </Typography>
                )}
                <Stack gap={1}>
                  {item.data &&
                    filterData(item.data).map((item) => (
                      <HistoryCard
                        data={item}
                        handleReview={handleReview}
                        id={item.id}
                      />
                    ))}
                </Stack>
              </Stack>
            );
          })}
      </Stack>

      <Model
        isOpen={openReview}
        setIsOpen={setOpenReview}
        id={reviewID}
        type={modelType}
      />
    </Box>
  );
};
