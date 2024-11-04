import { Typography, Box, Stack, TextField } from "@mui/material";
import React from "react";
import LogoIcon from "../assets/logoicon.png";
import styles from "./Landing.module.css";
import { SugessionCard } from "../components/SugessionCard";
import { Button } from "../components/common/Button";

export const Landing = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-end"}
      height={"100vh"}
      p={4}
      gap={4}
    >
      <Stack justifyContent={"center"} alignItems={"center"} gap={1}>
        <Typography variant="h2" sx={{ fontWeight: 500 }}>
          How Can I Help You Today?
        </Typography>
        <Box width={"65px"}>
          <img src={LogoIcon} alt="Logo icon" style={{ width: "100%" }} />
        </Box>
      </Stack>

      <Box className={styles.grid}>
        <SugessionCard
          title={"Hi, what is the weather"}
          body={"Get immediate AI generated response"}
        />
        <SugessionCard
          title={"Hi, what is the weather"}
          body={"Get immediate AI generated response"}
        />
        <SugessionCard
          title={"Hi, what is the weather"}
          body={"Get immediate AI generated response"}
        />
        <SugessionCard
          title={"Hi, what is the weather"}
          body={"Get immediate AI generated response"}
        />
      </Box>

      <Box display={"flex"} gap={2}>
        <TextField
          id="filled"
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

        <Button variant={"thin"} content={"Ask"} />
        <Button variant={"thin"} content={"Save"} />
      </Box>
    </Box>
  );
};
