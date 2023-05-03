import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

export default function Footer() {
    const theme = useTheme();
  return (
    <Box
      sx={{
        paddingTop: "25rem",
        
        width: "100%",
        background: "#241a3d",
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    ></Box>
  );
}
