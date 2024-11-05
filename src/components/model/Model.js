import { Padding } from "@mui/icons-material";
import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "../common/Button";
import FeedbackIcon from "../../assets/feedbackIcon.png";
import { Box, TextField, Typography, Rating } from "@mui/material";
import { Link } from "react-router-dom";

import X from "../../assets/X.png";

export const Model = ({ isOpen, type = "feedback", setIsOpen, id }) => {
  console.log("From Model" + id);
  const [reviewInput, setReviewInput] = useState("");
  const [value, setValue] = useState(0);

  const isFeedback = type === "feedback";

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (event) => {
    setReviewInput(event.target.value);
  };

  const customStyles = {
    content: {
      all: "none",
      display: "inline-block",
      backgroundColor: "#FAF7FF",
      width: "766px",
      height: "335px",
      margin: "auto",
      borderRadius: "10px",
      Padding: "1rem",
    },
  };

  const submitRating = (event) => {
    event.preventDefault();

    const data = JSON.parse(localStorage.getItem("chats"));

    const updated = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          response: {
            ...item.response,
            rating: value,
          },
        };
      } else {
        return item;
      }
    });

    localStorage.setItem("chats", JSON.stringify(updated));
    handleClose();
  };

  const submitFeedback = (event) => {
    event.preventDefault();

    const data = JSON.parse(localStorage.getItem("chats"));

    const updated = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          response: {
            ...item.response,
            review: reviewInput,
          },
        };
      } else {
        return item;
      }
    });

    localStorage.setItem("chats", JSON.stringify(updated));
    handleClose();
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          gap={2}
          height={"100%"}
          width={"100%"}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"} gap={2}>
              <img src={FeedbackIcon} />
              <Typography variant="body1" fontSize={"22px"}>
                Provide Additional Feedback
              </Typography>
            </Box>

            <Link onClick={handleClose}>
              <img src={X} />
            </Link>
          </Box>

          <form onSubmit={isFeedback ? submitFeedback : submitRating}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              gap={2}
              height={"100%"}
            >
              {isFeedback ? (
                <TextField
                  onChange={handleChange}
                  fullWidth
                  multiline
                  minRows={6}
                  InputProps={{
                    sx: {
                      borderRadius: "5px",
                      backgroundColor: "white",
                    },
                  }}
                ></TextField>
              ) : (
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={"100%"}
                >
                  <Rating
                    name="no-value"
                    value={value}
                    size="large"
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    sx={{
                      "& .MuiRating-icon": {
                        fontSize: "50px",
                      },
                    }}
                  />
                </Box>
              )}

              <Button content={"Submit"} variant={"normal"} type={"submit"} />
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
