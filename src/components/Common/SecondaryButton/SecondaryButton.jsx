import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const MyButton = styled(Button)({
  width: "fit-content",
  backgroundColor: "#1B68E9",
  color: "#C8E0FE",
  fontWeight: "bold",
  letterSpacing: "0.1px",
  padding: "10px 25px",
  borderRadius: "0px",

  "&:hover": {
    backgroundColor: "#C8E0FE",
    color: "#1B68E9",
  },
});

const SecondaryButton = ({ text, onClick }) => {
  return <MyButton onClick={onClick}>{text}</MyButton>;
};

export default SecondaryButton;
