import { Typography, Box, Stack, TextField, Grid } from "@mui/material";
import React, { useState } from "react";
import LogoIcon from "../assets/logoicon.png";
import styles from "./Landing.module.css";
import { SugessionCard } from "../components/SugessionCard";
import { Button } from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/common/NavBar";

export const Landing = () => {
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  const handle = () => {
    navigate(`chat/${question}`);
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"100vh"}
      p={2}
      gap={4}
    >
      <NavBar />
      <Stack justifyContent={"center"} alignItems={"center"} gap={1}>
        <Typography variant="h2" sx={{ fontWeight: 500 }}>
          How Can I Help You Today?
        </Typography>
        <Box width={"65px"}>
          <img src={LogoIcon} alt="Logo icon" style={{ width: "100%" }} />
        </Box>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => navigate("/chat/Hi, what is the weather")}
          >
            <SugessionCard
              title={"Hi, what is the weather"}
              body={"Get immediate AI generated response"}
            />
          </Link>
        </Grid>

        <Grid item xs={12} md={6}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => navigate("/chat/Hi, what is my location")}
          >
            <SugessionCard
              title={"Hi, what is my location"}
              body={"Get immediate AI generated response"}
            />
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => navigate("/chat/Hi, what is the temperature")}
          >
            <SugessionCard
              title={"Hi, what is the temperature"}
              body={"Get immediate AI generated response"}
            />
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => navigate("/chat/Hi, how are you")}
          >
            <SugessionCard
              title={"Hi, how are you"}
              body={"Get immediate AI generated response"}
            />
          </Link>
        </Grid>
      </Grid>

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

        <Button variant={"thin"} content={"Ask"} action={handle} />
        <Button variant={"thin"} content={"Save"} />
      </Box>
    </Box>
  );
};
