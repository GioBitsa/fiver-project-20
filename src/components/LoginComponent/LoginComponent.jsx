import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Container,
  Typography,
  Box,
  InputAdornment,
} from "@mui/material";
import {
  MyTextField,
  MyGridContainer,
  ForgotButton,
  MyLoadingButton,
} from "./Style";
import loginImage from "../../assets/login.png";
import { BiLockAlt, BiUser } from "react-icons/bi";
import { usersArray } from "../../data";

const LoginComponent = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });
  const [helperText, setHelperText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      if (username === "" && password === "") {
        setErrors({ username: true, password: true });
      } else if (username === "") {
        setErrors({ username: true });
      } else if (password === "") {
        setErrors({ password: true });
      } else {
        setErrors({ username: false, password: false });
        checkAccess();
      }

      setLoading(false);
    }, 1500);
  };

  const checkAccess = () => {
    usersArray.map((item) => {
      if (item.username === username && item.password === password) {
        navigate("/dashboard");
        const JWT =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        localStorage.setItem("token", JWT);
        localStorage.setItem("username", username);
      } else {
        setHelperText("Wrong username or password!");
        setErrors({ username: true, password: true });
      }
      return item;
    });
  };

  return (
    <MyGridContainer container spacing={0}>
      <Grid item xs={12} md={6}>
        <Container>
          <Typography variant="h6" component="div">
            <i>
              Reviews and ratings are driving online businesses today. Increase
              your revenues through insights from Reviewverse
            </i>
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "100%",
                maxWidth: "300px",
              },
              margin: "50px 0 50px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
            noValidate
            autoComplete="off"
          >
            <MyTextField
              error={errors.username}
              id="username"
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BiUser color="#0e2946" />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              helperText={helperText}
            />
            <MyTextField
              error={errors.password}
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BiLockAlt color="#0e2946" />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              helperText={helperText}
            />
            <MyLoadingButton loading={loading} onClick={() => handleSubmit()}>
              Login
            </MyLoadingButton>
            <ForgotButton variant="text">Forgot password?</ForgotButton>
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12} md={6}>
        <Container>
          <img src={loginImage} alt="login" />
        </Container>
      </Grid>
    </MyGridContainer>
  );
};

export default LoginComponent;
