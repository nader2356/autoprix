import { useTheme } from "@emotion/react";
import { Box, Container, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  return (
    <Box
    sx={{
      paddingTop: "5rem",
      paddingBottom: "5rem",
      paddingLeft:  isDesktop ? "12rem" : "0rem",
      width: "100%",
      backgroundColor: "#241a3d",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }}
  >
    <Container maxWidth="2xl">
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ marginTop:  "-0.4rem" }}>
          <Typography
            sx={{
              marginTop: "19px  !important",
              marginBottom: "12px  !important",
              color: "#fff !important",
              fontSize: "1.9rem !important",
              lineHeight: "1.5 !important",
            }}
          >
            À propos de nous
          </Typography>
          <Divider
            sx={{
              backgroundColor: "#4f4f4f !important",
              fontSize: "1.9rem !important",
            }}
          ></Divider>
          <Typography
            sx={{
              marginTop: "18px  ",
              marginBottom: "18px  ",
              color: "#fff !important",
              fontSize: "1.3rem !important",
              letterSpacing: ".05125em !important",
            }}
          >
            Autoprix centralise le plus grand nombre d'annonces de voitures
            d'occasion en Tunisie. Toutes les annonces automobile sur le même
            site web.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} >
          <Typography
            sx={{
              marginTop: "12px  !important",
              marginBottom: "12px  !important",
              color: "#fff !important",
              fontSize: "1.9rem !important",
            }}
          >
            Trouvez-nous ici
          </Typography>
          <Divider
            sx={{
              backgroundColor: "#4f4f4f !important",
              fontSize: "1.9rem !important",
            }}
          ></Divider>

          <ul>
            <li style={{ color: "#fff", marginBottom: "1rem" }}>
              Rue Tarek ibn zied, Nadhour, Zaghouan
            </li>
            <li style={{ color: "#fff" }}>Email : contact@autoprix.tn</li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ marginLeft:  isDesktop ? "5rem" : "0rem" }}>
          <Typography
            sx={{
              marginTop: "12px  !important",
              marginBottom: "12px  !important",
              color: "#fff !important",
              fontSize: "1.9rem !important",
              lineHeight: "1.5 !important",
            }}
          >
            Horaires
          </Typography>
          <Divider
            sx={{
              backgroundColor: "#4f4f4f !important",
              fontSize: "1.9rem !important",
            }}
          ></Divider>
          <ul>
            <li style={{ color: "#fff", marginBottom: "1rem" }}>
              Lundi-Vendredi : 9h-18h
            </li>
            <li style={{ color: "#fff", marginBottom: "1rem" }}>
              Samedi : 9h-15h
            </li>
            <li style={{ color: "#fff" }}>Dimanche : Fermé</li>
          </ul>
        </Grid>
      </Grid>
      <Box
        sx={{
          color: "#fff",
          justifyContent: "center",
          typography: "body1",
          marginTop:"2rem",
          "& > :not(style) + :not(style)": {
            ml: 1,
          },
        }}
      >
        <Link
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            letterSpacing: ".0333333333rem !important"
          }}
          underline="none"
        >
          Conditions d'utilisation
        </Link>
        <Link
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            letterSpacing: ".0333333333rem !important"
          }}
          underline="none"
        >
          À propos de nous
        </Link>
        <Link
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            letterSpacing: ".0333333333rem !important"
          }}
          underline="none"
        >
          Comparer les prix des produits
        </Link>
      </Box>
      <Typography  sx={{
            color: "#868686 !important",
          marginTop:"1rem",
            letterSpacing: ".0333333333rem !important"
          }}>2021 © Tous droits réservés -<span style={{color: "#fff"}}> Autoprix.tn </span></Typography>
    </Container>
  </Box>
  );
}
