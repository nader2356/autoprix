import Drawer from "@mui/material/Drawer/Drawer";
import Box from "@mui/material/Box/Box";
import Divider from "@mui/material/Divider/Divider";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";

import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import { Avatar, Badge, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import HamburgerButton2 from "./HambuergerButton2";
import Links from "./Link";
export default function SlideBar({ open, toggleDrawer, drawerWidth }) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const StyledDrawerHeader = styled(Box)({
    padding: "1rem",
    marginInline: "auto",
  });
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  const StyledDrawerBody = styled(Box)({
    overflow: "auto",
    height: "100%",
  });

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
          <HamburgerButton2 toggleDrawer={toggleDrawer}></HamburgerButton2>
          <Button sx={{ color: "white", marginLeft: -4, paddingLeft: 2 }}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="" />
            </StyledBadge>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                marginLeft: 2,
                fontSize: "1rem",
                fontWeight: 700,
                color: "inherit",
              }}
            >
              Mon Compte
            </Typography>
          </Button>
        </Box>
        <Links toggleDrawer={toggleDrawer}></Links>
      </Drawer>
    </>
  );
}
