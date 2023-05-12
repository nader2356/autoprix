import { useState } from "react";

import useTheme from "@mui/material/styles/useTheme";

import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import AppBar from "../Component/AppBar/AppBar";
import SlideBar from "../Component/SideBar/SideBar";

import Footer from "../Component/Footer/Footer";
import { useMediaQuery } from "@mui/material";

const drawerWidth = "25rem";

export default function FullLayout() {
  const [openDrawer, setOpenDrawer] = useState(false);


  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  const toggleDrawer = () => setOpenDrawer((prev) => !prev);
  return (
    <Box sx={{  width: "100%" }}>
      <AppBar
        open={openDrawer}
        drawerWidth={drawerWidth}
        setOpenDrawer={setOpenDrawer}
      />

    
        <SlideBar
          open={openDrawer}
          drawerWidth={drawerWidth}
          toggleDrawer={toggleDrawer}
        />

        <Box component="main"
          sx={{
           
            minHeight: "100vh",
            width: "100%",
            backgroundColor: "#bdbdbd",
            transition: theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
           
					}}
        >
          <Outlet />
        </Box>
        <Footer></Footer>
      
    </Box>
  );
}
