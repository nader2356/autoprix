import { useState, useEffect } from "react";

import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import AppBar from "../Component/AppBar/AppBar";
import SlideBar from "../Component/SideBar/SideBar";
import Breadcrumbs from "./Breadcrumbs";

const drawerWidth = "25rem";

export default function FullLayout() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();

  const toggleDrawer = () => setOpenDrawer((prev) => !prev);
  return (
    <>
      <AppBar
        open={openDrawer}
        drawerWidth={drawerWidth}
        setOpenDrawer={setOpenDrawer}
      />

      <Box component="main">
        <SlideBar
          open={openDrawer}
          drawerWidth={drawerWidth}
          toggleDrawer={toggleDrawer}
        />

        <Box
          sx={{
            paddingTop: "4rem",
            minHeight: "100vh",
            width: "100%",

            transition: theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
           <Breadcrumbs></Breadcrumbs>
          <Container
            id="main"
            maxWidth="xl"
            sx={{
              minHeight: "100vh",
            }}
          >
           
            <Outlet />
          </Container>
        </Box>
      </Box>
    </>
  );
}
