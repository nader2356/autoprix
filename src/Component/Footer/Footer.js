import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        paddingTop: "20rem",

        width: "100%",
        backgroundColor: "#241a3d",
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Container
        id="main"
        maxWidth="xl"
       
      ></Container>
    </Box>
  );
}
