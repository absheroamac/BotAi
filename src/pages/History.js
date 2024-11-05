import {
  Typography,
  Box,
  Stack,
  TextField,
  Select,
  MenuItem,
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

  useEffect(() => {
    const updated = chatList.filter((item) => item.response.rating === rating);
    setFilteredChat(updated);
  }, [rating]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chats"));
    if (data) {
      setChatList(data);
      setFilteredChat(data);
    }

    console.log(data);
  }, [openReview]);

  const handleReview = (id, type) => {
    setOpenReview(true);
    setModelType(type);
    setReviewID(id);
    console.log("From History?" + id);
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
        justifyContent={"center"}
        width={"100%"}
        alignItems={"center"}
        gap={2}
      >
        <Typography fontSize={"16px"}>Filter by Rating</Typography>
        <Select value={rating} onChange={handleChange} sx={{ width: "200px" }}>
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1 Star Rated</MenuItem>
          <MenuItem value={2}>2 Star Rated</MenuItem>
          <MenuItem value={3}>3 Star Rated</MenuItem>
          <MenuItem value={4}>4 Star Rated</MenuItem>
          <MenuItem value={5}>5 Star Rated</MenuItem>
        </Select>
      </Box>
      <Stack gap={1} overflow={"scroll"} height={"100%"}>
        {filteredChat.length > 0 &&
          filteredChat.map((item) => (
            <HistoryCard data={item} handleReview={handleReview} id={item.id} />
          ))}
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
