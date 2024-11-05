import { Typography, Box, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import LogoIcon from "../assets/logoicon.png";
import styles from "./Landing.module.css";
import { SugessionCard } from "../components/SugessionCard";
import { Button } from "../components/common/Button";
import { ChatCard } from "../components/ChatCard";
import { Responses } from "../components/Responses";
import { Model } from "../components/model/Model";
import { json, useParams } from "react-router-dom";

export const Chat = () => {
  const [question, setQuestion] = useState("");
  const [responses, setResponses] = useState([]);
  const [openReview, setOpenReview] = useState(false);
  const [reviewID, setReviewID] = useState(null);
  const [modelType, setModelType] = useState("");
  const { querry } = useParams();

  useEffect(() => {
    if (querry) {
      handleAsk(null, querry);
    }

    console.log("Running useEffects");
  }, [querry]);

  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${formattedMinutes} ${ampm}`;
  }

  const handleReview = (id, type) => {
    setOpenReview(true);
    setModelType(type);
    setReviewID(id);
  };

  const handleAsk = (event, querry) => {
    let quest;
    if (querry) {
      quest = querry;
    } else {
      quest = question;
    }
    const chats = JSON.parse(localStorage.getItem("chats"));
    let answer = Responses.find((element) => element.question === quest);
    let id = 0;

    if (chats) {
      let lastResponse = chats[chats.length - 1];
      id = lastResponse.id + 1;
    }

    if (answer) {
      answer = answer.response;
    } else {
      answer = "As an AI Language Model, I don’t have the details";
    }

    const newResponse = {
      id: id,
      request: {
        message: quest,
        time: getCurrentTime(),
      },
      response: {
        message: answer,
        time: getCurrentTime(),
        rating: "",
        review: "",
      },
    };

    if (responses.length === 0) {
      setResponses([newResponse]);
    } else {
      setResponses((prev) => [...prev, newResponse]);
    }

    if (chats) {
      localStorage.setItem("chats", JSON.stringify([...chats, newResponse]));
    } else {
      localStorage.setItem("chats", JSON.stringify([newResponse]));
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-end"}
      height={"100vh"}
      p={4}
      gap={4}
    >
      <Stack gap={1} overflow={"auto"}>
        {responses.map((response) => (
          <Stack gap={1}>
            <ChatCard
              type={"you"}
              message={response.request.message}
              time={response.request.time}
            />
            <ChatCard
              type={"bot"}
              message={response.response.message}
              time={response.response.time}
              handleReview={handleReview}
              id={response.id}
            />
          </Stack>
        ))}
      </Stack>
      <Box display={"flex"} gap={2}>
        <TextField
          id="filled"
          onChange={(event) => setQuestion(event.target.value)}
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

        <Button variant={"thin"} content={"Ask"} action={handleAsk} />
        <Button variant={"thin"} content={"Save"} />
      </Box>

      <Model
        isOpen={openReview}
        setIsOpen={setOpenReview}
        id={reviewID}
        type={modelType}
      />
    </Box>
  );
};
