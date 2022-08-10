import React from 'react'
import { Grid, Container, Typography, Box, InputAdornment } from "@mui/material"
import { MyTextField, LoginButton, MyGridContainer, ForgotButton } from "./Style"
import loginImage from '../../assets/login.png'
import { BiLockAlt, BiUser } from 'react-icons/bi'

const LoginComponent = () => {
    return (
        <MyGridContainer container spacing={0}>
            <Grid item sx={12} sm={6}>
                <Container>
                    <Typography
                        variant="h6"
                        component="div"
                    >
                        <i>Reviews and ratings are driving online businesses today. Increase your revenues through insights from Reviewverse</i>
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '100%', maxWidth: '300px' },
                            margin: "50px 0 50px 0",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <MyTextField
                            id="outlined-username-input"
                            label="Username"
                            autoComplete="current-password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BiUser color="#0e2946" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <MyTextField
                            id="outlined-password-input"
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
                        />
                        <LoginButton>Login</LoginButton>
                        <ForgotButton variant="text">Forgot password?</ForgotButton>
                    </Box>
                </Container>
            </Grid>
            <Grid item sx={12} sm={6}>
                <Container>
                    <img src={loginImage} alt="login" />
                </Container>
            </Grid>
        </MyGridContainer>
    )
}

export default LoginComponent