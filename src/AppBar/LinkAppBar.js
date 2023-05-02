import List from "@mui/material/List/List";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import styled from "@mui/material/styles/styled";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack/Stack";
import Box from "@mui/material/Box";

const routes = [
  {
    path: "dashboard",
    name: "Dashboard",
  },
  {
    path: "clients",
    name: "Clients",
  },
  {
    path: "users",
    name: "Users",
  },
];

export default function LinkAppBar({ toggleDrawer }) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const goToTop = () => window.scrollTo(0, 0);

  const StyledList = styled(List)({
    paddingInline: "1rem",
    marginLeft: "-4rem",
  });

  const StyledNavLink = styled(NavLink)({
    textDecoration: "none",
    color: "inherit",
    transition: theme.transitions.create(["background-color", "color"], {
      duration: theme.transitions.duration.shortest,
    }),
  });

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <StyledList>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          spacing={-10}
        >
          {routes.map((route) => (
            <StyledNavLink to={route.path} key={route.name}>
              <ListItemButton
                onClick={() => {
                  goToTop();
                  if (isTablet) toggleDrawer();
                }}
                sx={{
                  borderRadius: "0.5rem",
                }}
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href=""
                      sx={{
                        mr: 2,

                        flexGrow: 1,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        fontSize: "1.4rem",
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      {route.name}
                    </Typography>
                  }
                />
              </ListItemButton>
            </StyledNavLink>
          ))}
        </Stack>
      </StyledList>
    </Box>
  );
}
