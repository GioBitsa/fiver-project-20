import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  Paper,
  ListItemIcon,
  MenuItem,
  ListItemText,
  Box,
  Stack,
} from "@mui/material";
import { MyMenuList } from "./Style";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiComment } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

const PageLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(location.pathname);

  const handleClick = (value) => {
    setSelected(value);
    navigate(value);
  };

  return (
    <>
      <Navbar />
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: { xs: "300px", md: "350px" } }}>
          <Paper
            elevation={0}
            sx={{ xs: { width: "300px" }, md: { width: "350px" } }}
          >
            <MyMenuList>
              <MenuItem
                onClick={() => handleClick("/dashboard")}
                selected={selected === "/dashboard"}
              >
                <ListItemIcon>
                  <AiOutlineHome />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
                <ListItemIcon>
                  <AiOutlineMenu />
                </ListItemIcon>
              </MenuItem>
              <MenuItem
                onClick={() => handleClick("/review")}
                selected={selected === "/review"}
              >
                <ListItemIcon>
                  <BiComment />
                </ListItemIcon>
                <ListItemText>Review comments</ListItemText>
                <ListItemIcon>
                  <AiOutlineMenu />
                </ListItemIcon>
              </MenuItem>
              <MenuItem
                onClick={() => handleClick("/recommendations")}
                selected={selected === "/recommendations"}
              >
                <ListItemIcon>
                  <BiComment />
                </ListItemIcon>
                <ListItemText>Insights and recommendations</ListItemText>
                <ListItemIcon>
                  <AiOutlineMenu />
                </ListItemIcon>
              </MenuItem>
              <MenuItem
                onClick={() => handleClick("/settings")}
                selected={selected === "/settings"}
              >
                <ListItemIcon>
                  <FiSettings />
                </ListItemIcon>
                <ListItemText>Settings</ListItemText>
                <ListItemIcon>
                  <AiOutlineMenu />
                </ListItemIcon>
              </MenuItem>
            </MyMenuList>
          </Paper>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "calc(100% - 350px)" },
            padding: "24px 24px",
          }}
        >
          {children}
        </Box>
      </Stack>
    </>
  );
};

export default PageLayout;
