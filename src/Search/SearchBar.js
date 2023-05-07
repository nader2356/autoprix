import { default as NavBar } from "@mui/material/AppBar/AppBar";
import Toolbar from "@mui/material/Toolbar/Toolbar";

import Box from "@mui/material/Box/Box";

import SearchIcon from "@mui/icons-material/Search";

import Button from "@mui/material/Button/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";

import useTheme from "@mui/material/styles/useTheme";

import { Container, IconButton, InputBase } from "@mui/material";

export default function SearchBar() {
  const theme = useTheme();
  return (
    <>
      <NavBar
        position="fixed"
        sx={{
          background: "#241a3d",
          boxShadow: "none",
          width: "100%",
          height: "60px",
          marginTop: "4.0rem",
          paddingBottom: "4rem",

          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "21.5rem",
            }}
          >
            {/* SEARCH BAR */}
            <Box display="flex" backgroundColor="#eeeeee" borderRadius="3px">
              <InputBase sx={{ ml: 2, width: "50vh" }} placeholder="Search" />
              <IconButton sx={{ p: 1 }}>
                <SearchIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                marginLeft: "1rem",
                textTransform: "capitalize",
                background: "#fcb414",
                color: "#212121",
                display: { xs: "flex", md: "none" },
                fontSize: "20px",
                fontWeight: "bold",
                paddingRight: " 2rem",
                paddingLeft: "1rem",
              }}
            >
              <FilterAltIcon
                sx={{
                  width: "2rem",
                  height: "2rem",
                  marginRight: "0.5rem",
                  color: "#212121",
                }}
              />
              Filter
            </Button>
          </Container>
        </Toolbar>
      </NavBar>
    </>
  );
}
