import { Avatar, Badge, Button, Typography } from "@mui/material";
import HamburgerButton2 from "./HambuergerButton2";
import styled from "@mui/material/styles/styled";
export default function HeaderSideBar({ toggleDrawer, titre }) {
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
  return (
    <>
      <HamburgerButton2 toggleDrawer={toggleDrawer}></HamburgerButton2>

      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="" />
      </StyledBadge>
      <Button sx={{ color: "white", marginLeft: -2, paddingLeft: 2 }}>
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            textDecoration: "none",
          
            textTransform: "capitalize",
            marginLeft: 2,
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "inherit",
          }}
        >
          {titre}
        </Typography>
      </Button>
    </>
  );
}
