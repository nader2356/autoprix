import { useTheme } from "@emotion/react";
import { Box, IconButton, Toolbar } from "@mui/material";
import { default as NavBar } from "@mui/material/AppBar/AppBar";
export default function SearchBar({ setOpenSearchBar, openSreachBar }) {
  const theme = useTheme();
  return (
    <>
      
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              marginTop : "50%",
              alignItems: "right",
              justifyContent: "end",
              background: "#241a3d",
            }}
          ></Box>
        </Toolbar>
      
    </>
  );
}
