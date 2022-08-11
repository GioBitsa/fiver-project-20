import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  Paper,
  ListItemIcon,
  MenuItem,
  ListItemText,
  Grid,
} from "@mui/material";
import { MyMenuList } from "./Style";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiComment } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const handleClick = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item sx={{ width: "350px" }}>
          <Paper elevation={0} sx={{ width: 350 }}>
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
        </Grid>
        <Grid item sx={{ width: "calc(100% - 350px)", marginTop: "40px" }}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default PageLayout;
