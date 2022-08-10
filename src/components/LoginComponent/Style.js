import { styled } from '@mui/system'
import { Grid, TextField, Button } from "@mui/material"

export const MyGridContainer = styled(Grid)({
    height: "calc(100vh - 64px)",
    alignItems: "center",

    '&>div': {
        height: "100%",
        display: "flex",
        alignItems: "center",
    },

    '&>div:first-child': {
        backgroundColor: "#eaeffe",
    },

    '&>div:last-child': {
        backgroundColor: "#fcfcff",
    },

    '& img': {
        display: "block",
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
        objectFit: "cover",
    },
})

export const MyTextField = styled(TextField)({
    width: "100%",

    '& .MuiInputBase-root': {
        color: "#0e2946"
    },

    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: "#0e2946",
    },

    '& .MuiFormLabel-root': {
        color: "#0e2946"
    }
})

export const LoginButton = styled(Button)({
    width: "100%",
    maxWidth: "300px",
    padding: "10px 14px",
    margin: "8px",
    backgroundColor: "#eaeffe",
    color: "#0e2946",
    border: "1px solid #0e2946",
    fontWeight: "700",
})

export const ForgotButton = styled(Button)({
    color: "#0e2946",
    fontSize: "12px",
    fontWeight: "400",

    "&:hover": {
        background: 'none',
    }
})