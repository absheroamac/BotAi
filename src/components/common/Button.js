import { Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";

export const Button = ({ content, variant, action, type }) => {
  const bold = variant === "bold";
  const theme = useTheme();
  const style = {
    variant: bold ? "h1" : "body1",
    fontSize: bold ? "16px" : "20px",
    width: bold ? "100%" : "auto",
  };
  return (
    <button
      type={type}
      onClick={action}
      style={{
        width: style.width,
        padding: "8px 16px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Typography variant={style.variant} sx={{ fontSize: style.fontSize }}>
        {content}
      </Typography>
    </button>
  );
};
