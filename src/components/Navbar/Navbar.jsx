import React from "react";
import { Box, Toolbar, Typography, Avatar, Stack } from "@mui/material";
import { MyAppBar } from "./Style";
import MainButton from "../Common/MainButton/MainButton";
import { useNavigate, useLocation } from "react-router-dom";
import AvatarImg from "../../assets/avatar.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
            textAlign: location.pathname === "/" ? "left" : "center",
            position: "absolute",
            width: "100%",
          }}
        >
          Reviewserve
        </Typography>
        <Box sx={{ display: "block" }}>
          {location.pathname === "/" ? (
            <Stack direction="row" spacing={2}>
              <MainButton text="home" onClick={() => navigate("/")} />
              <MainButton
                text="resources"
                onClick={() => navigate("/resources")}
              />
              <MainButton text="blog" onClick={() => navigate("/blog")} />
              <MainButton
                text="book a demo"
                onClick={() => navigate("/demo")}
              />
              <MainButton text="login" onClick={() => navigate("/login")} />
            </Stack>
          ) : localStorage.getItem("token") ? (
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
