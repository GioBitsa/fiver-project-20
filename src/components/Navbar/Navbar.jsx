import React from 'react'
import { Box, Toolbar, Typography } from '@mui/material'
import { MyAppBar } from './Style'
import MainButton from '../Common/MainButton/MainButton';

const Navbar = () => {

    return (
        <MyAppBar position="relative">
            <Toolbar>
                <Box style={{ opacity: 0 }}>
                    profile
                </Box>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ flexGrow: 1, textAlign: "center" }}
                >
                    Reviewserve
                </Typography>
                <Box sx={{ display: "block" }}>
                    <MainButton text="register" />
                </Box>
            </Toolbar>
        </MyAppBar>
    )
}

export default Navbar