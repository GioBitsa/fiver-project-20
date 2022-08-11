import React from 'react'
import { Button } from "@mui/material"
import { styled } from "@mui/system";

const MyButton = styled(Button)({
    backgroundColor: "#0e2946",
    color: "#fcfcff",
    padding: "10px 20px",
    fontSize: "12px",

    '&:hover': {
        backgroundColor: "rgba(14, 41, 70, 0.7)"
    }
})

const MainButton = ({ text, onClick }) => {
    return (
        <MyButton onClick={onClick}>{text}</MyButton>
    )
}

export default MainButton