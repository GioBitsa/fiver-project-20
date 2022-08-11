import React from "react";
import { Box, Toolbar, Typography, Avatar, Stack } from "@mui/material";
import { MyAppBar } from "./Style";
import MainButton from "../Common/MainButton/MainButton";
import { useNavigate } from "react-router-dom";
import AvatarImg from "../../assets/avatar.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <MyAppBar position="relative">
      <Toolbar sx={{ justifyContent: "space-between", overflowX: "hidden" }}>
        <Box sx={{ zIndex: 1 }}>
          {localStorage.getItem("token") ? (
            <Stack spacing={1} direction="row" alignItems="center">
              <Avatar alt="profile" src={AvatarImg} />
              <Stack spacing={0}>
                <Typography variant="span" component="div">
                  Welcome back,
                </Typography>
                <Typography variant="p" component="div">
                  <strong>{localStorage.getItem("username")}</strong>
                </Typography>
              </Stack>
            </Stack>
          ) : (
            ""
          )}
        </Box>
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            position: "absolute",
            width: "100%",
          }}
        >
          Reviewserve
        </Typography>
        <Box sx={{ display: "block" }}>
          {localStorage.getItem("token") ? (
            <MainButton text="signout" onClick={() => handleLogout()} />
          ) : (
            <MainButton text="register" />
          )}
        </Box>
      </Toolbar>
    </MyAppBar>
  );
};

export default Navbar;
