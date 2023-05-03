import Drawer from "@mui/material/Drawer/Drawer";
import Box from "@mui/material/Box/Box";

import Links from "./Link";
import HeaderSideBar from "./HeaderSideBar";
export default function SlideBar({ open, toggleDrawer }) {
  return (
    <>
      <Drawer
        variant={"temporary"}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: "19rem",
            boxSizing: "border-box",
            background: "#241a3d",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <HeaderSideBar
            toggleDrawer={toggleDrawer}
            titre="Mon Compte"
          ></HeaderSideBar>
        </Box>
        <Links toggleDrawer={toggleDrawer}></Links>
      </Drawer>
    </>
  );
}
