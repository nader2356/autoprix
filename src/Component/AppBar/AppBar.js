import { useState } from "react";

import { default as NavBar } from "@mui/material/AppBar/AppBar";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Divider from "@mui/material/Divider/Divider";
import Box from "@mui/material/Box/Box";
import Avatar from "@mui/material/Avatar";
import logo from "../../img/logo.59e5fdb.png";
import Button from "@mui/material/Button/Button";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import Drawer from "@mui/material/Drawer/Drawer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import HamburgerButton from "./HambuergerButton";
import { IconButton, Tooltip } from "@mui/material";
import Links from "../SideBar/Link";
import LinkAppBar from "./LinkAppBar";

export default function AppBar({ open, drawerWidth, setOpenDrawer }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const pages = ["Find Work", "My Jobs", "Reports", "Messages"];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };
  return (
    <>
      <NavBar
        position="fixed"
        sx={{
          background: "#241a3d",
          boxShadow: "none",
          width: "100%",
          height: "60px",
          paddingBottom: "4rem",

          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar  >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <HamburgerButton toggleDrawer={toggleDrawer} />
            <img style={{ width: "22vh" }} alt="Remy Sharp" src={logo} />

            <LinkAppBar toggleDrawer={toggleDrawer}></LinkAppBar>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "right",
              justifyContent: "end",
            }}
          >
            <IconButton
              sx={{
                color: "white",
                background: "hsla(0,0%,100%,.1)",
                marginRight: 2,
              }}
            >
              <QuestionMarkIcon />
            </IconButton>

            <IconButton
              disableRipple={true}
              sx={{
                color: "white",
                background: "hsla(0,0%,100%,.1)",
                marginRight: 2,
              }}
            >
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton
              disableRipple={true}
              sx={{ color: "white", background: "hsla(0,0%,100%,.1)" }}
            >
              <NearMeOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </NavBar>
    </>
  );
}
