import { SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@emotion/react";

export default function Dashboard() {
  const [Prix, setPrix] = useState("");
  const [Kilometrage, setKilometrage] = useState("");
  const theme = useTheme();

  const handleChangePrix = (event) => {
    setPrix(event.target.value);
  };

  const handleChangeKilometrage = (event) => {
    setPrix(event.target.value);
  };

  const backgroundImage =
    "	https://cdn.jsdelivr.net/gh/edwm101/cdn@master/dist/img/banner-v3-min.20ce963.png";

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          height: "90vh",
          paddingTop: "4rem",
          backgroundColor: "rgb(231, 237, 240)",
          backgroundPosition: " bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "18px",
              color: "#687690",
              fontWeight: "500",
              mt: 10,
              mb: 4,
            }}
          >
            Welcome to Besnik Agency
          </Typography>

          <Grid
            container
            spacing={1}
            backgroundColor="#fff"
            paddingBottom="0.5rem"
            paddingRight="0.5rem"
            borderRadius="0.5rem"
            marginTop="4rem"
          >
            <Grid xs={12} sm={6} lg={3} md={5} item>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Prix}
                  label="Prix"
                  onChange={handleChangePrix}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} lg={3} md={5} item>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Prix}
                  label="Prix"
                  onChange={handleChangePrix}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} lg={3} md={3} item>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Kilometrage}
                  label="Kilometrage"
                  onChange={handleChangeKilometrage}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} lg={3} md={7} item>
              <FormControl fullWidth>
                <Button variant="contained">
                  {" "}
                  <SearchOutlined
                    sx={{
                      marginTop: "0.1rem",
                      height: "3.2rem",
                      fontSize: "20rem",
                      marginRight: "0.5rem",
                      color: "#fff",
                    }}
                  />
                </Button>
              </FormControl>
            </Grid>
          </Grid>

          <Card
            sx={{
              maxWidth: 505,
              maxHeight: 100,
              marginLeft: "-0.6rem",
              marginTop: "8rem",
              borderRadius: "0.7rem",
            }}
          >
            <CardContent>
              <Typography
                fontSize="1.5rem"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Estimer une voiture
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
                Cette voiture en ligne
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Box
        sx={{
          
          height: "70vh",
          paddingTop: "0.1rem",
          backgroundColor: "rgb(231, 237, 240)",
          
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "18px",

              color: "#687690",
              fontWeight: "500",
              mt: 10,
              mb: 4,
            }}
          >
            Welcome to Besnik Agency
          </Typography>

          <Grid
            container
            spacing={1}
            backgroundColor="#fff"
            paddingBottom="0.5rem"
            paddingRight="0.5rem"
            borderRadius="0.5rem"
            marginTop="4rem"
          >
            <Grid xs={12} sm={6} lg={3} md={5} item>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Prix}
                  label="Prix"
                  onChange={handleChangePrix}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} lg={3} md={5} item>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Prix}
                  label="Prix"
                  onChange={handleChangePrix}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} lg={3} md={3} item>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Kilometrage}
                  label="Kilometrage"
                  onChange={handleChangeKilometrage}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} lg={3} md={7} item>
              <FormControl fullWidth>
                <Button variant="contained">
                  {" "}
                  <SearchOutlined
                    sx={{
                      marginTop: "0.1rem",
                      height: "3.2rem",
                      fontSize: "20rem",
                      marginRight: "0.5rem",
                      color: "#fff",
                    }}
                  />
                </Button>
              </FormControl>
            </Grid>
          </Grid>

          <Card
            sx={{
              maxWidth: 505,
              maxHeight: 100,
              marginLeft: "-0.6rem",
              marginTop: "8rem",
              borderRadius: "0.7rem",
            }}
          >
            <CardContent>
              <Typography
                fontSize="1.5rem"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Estimer une voiture
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
                Cette voiture en ligne
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}
