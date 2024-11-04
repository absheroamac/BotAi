import { Typography, Box, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import LogoIcon from "../assets/logoicon.png";
import styles from "./Landing.module.css";
import { SugessionCard } from "../components/SugessionCard";
import { Button } from "../components/common/Button";
import { ChatCard } from "../components/ChatCard";
import { Responses } from "../components/Responses";

export const Chat = () => {
  const [question, setQuestion] = useState("");
  const [responses, setResponses] = useState([]);

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

  const handleAsk = () => {
    let answer = Responses.find((element) => element.question === question);
    console.log(answer);
    let lastResponse = responses[responses.length - 1];
    let id = 0;
    if (lastResponse) {
      lastResponse.id += 1;
    }

    if (!answer) {
      answer = "As an AI Language Model, I don’t have the details";
    }

    const newResponse = {
      id: id,
      request: {
        message: question,
        time: getCurrentTime(),
      },
      response: {
        message: answer.response,
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

    console.log(responses);
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
    </Box>
  );
};
