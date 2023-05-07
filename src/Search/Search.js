import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  InputBase,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import Breadcrumbs from "./Breadcrumbs";
import { useState } from "react";
import SearchBar from "./SearchBar";
import EastIcon from "@mui/icons-material/East";

export default function Dashboards() {
  const [expanded, setExpanded] = useState("Indicateur Bonne Affaire");


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  

  return (
    <>
      <SearchBar></SearchBar>
      <Breadcrumbs></Breadcrumbs>
      <Box m="1.5rem 2.5rem" display="flex" flex-wrap="wrap">
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="160px"
          gap="20px"
        >
          {/* ROW 1 */}

          {/* ROW 2 */}
          <Box gridColumn="span 5" gridRow="span 3" marginLeft="2rem">
            <Card sx={{ maxWidth: 505, maxHeight: 100, marginLeft: "-2rem" }}>
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

            <Box
              marginLeft="-2rem"
              marginTop="0.5rem"
              maxWidth={540}
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Filter</Typography>
              <Button
                sx={{
                  marginLeft: "-1rem",
                  textTransform: "capitalize",

                  color: "#212121",

                  fontSize: "20px",
                  fontWeight: "bold",
                  paddingRight: " 2rem",
                  paddingLeft: "1rem",
                }}
              >
                <RefreshIcon
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.5rem",
                    color: "#212121",
                  }}
                />
                Réinitialiser
              </Button>
            </Box>
            <Box marginLeft="-2rem" marginTop="0.5rem">
              <Button
                sx={{
                  textTransform: "capitalize",
                  background: "#241a3d",
                  color: "#eeee",
                  width: "32rem",
                  height: "3.5rem",
                  fontSize: "20px",
                  fontWeight: "bold",
                  paddingRight: " 2rem",
                  paddingLeft: "1rem",
                }}
              >
                voir 2356 voiture
              </Button>
            </Box>
            <Box
              display="flex"
              backgroundColor="#fafafa"
              justifyContent="space-between"
              width="32rem"
              marginLeft="-2rem"
              marginTop="0.5rem"
              borderRadius="3px"
            >
              <InputBase sx={{ ml: 2 }} placeholder="Ex : Sousse" />
              <IconButton sx={{ p: 1 }}>
                <SearchIcon />
              </IconButton>
            </Box>

            <Card
              sx={{
                maxWidth: 512,
                marginLeft: "-2rem",
                marginTop: "0.4rem",
              }}
            >
              <FormControl
                sx={{ margin: "0rem 0rem 0rem 1.5rem" }}
                component="fieldset"
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="gilad" />}
                    label="Afficher les voitures vendus"
                  />
                  <FormControlLabel
                    control={<Checkbox name="jason" />}
                    label="Masquer les prix 0 DT"
                  />
                </FormGroup>
              </FormControl>
            </Card>

            <Box marginLeft="-2rem" marginTop="0.4rem">
              <Accordion
                sx={{ width: "89%" }}
                expanded={expanded === "Indicateur Bonne Affaire"}
                onChange={handleChange("Indicateur Bonne Affaire")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    "&.Mui-expanded": {
                      minHeight: 50,
                      borderBottom: "1px solid #dddddd",
                    },
                    "& .MuiAccordionSummary-content": {
                      margin: "0.2rem 0 ",
                    },
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#eeeeee",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  >
                    <EastIcon
                      sx={{
                        color: "#00B790",
                        fontSize: 30,
                      }}
                    ></EastIcon>
                  </IconButton>

                  <Typography sx={{ paddingTop: "0.7rem" }}>
                    Indicateur Bonne Affaire
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ marginTop: "-0.3rem", height: "10.5rem" }}
                >
                  <Box sx={{ display: "flex" }}>
                    <FormControl
                      sx={{ ml: "0.7rem" }}
                      component="fieldset"
                      variant="standard"
                    >
                      <FormGroup sx={{ width: "30rem" }}>
                        <FormControlLabel
                          control={<Checkbox name="gilad" />}
                          label="Trés bonne affaire"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="jason" />}
                          label="Bonne affaire"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="jason" />}
                          label="Offre équitable"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl
                      sx={{ ml: "-8rem" }}
                      component="fieldset"
                      variant="standard"
                    >
                      <FormGroup sx={{ width: "20rem" }}>
                        <FormControlLabel
                          control={<Checkbox name="gilad" />}
                          label="Au-dessus du marché"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                              width: "15rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="jason" />}
                          label="Hors marché"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                      </FormGroup>
                    </FormControl>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box marginLeft="-2rem" marginTop="0.4rem">
              <Accordion
                sx={{ width: "89%" }}
                expanded={expanded === "Carburant"}
                onChange={handleChange("Carburant")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    "&.Mui-expanded": {
                      minHeight: 50,
                      borderBottom: "1px solid #dddddd",
                    },
                    "& .MuiAccordionSummary-content": {
                      margin: "0.2rem 0 ",
                    },
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#eeeeee",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  >
                    <EastIcon
                      sx={{
                        color: "#00B790",
                        fontSize: 30,
                      }}
                    ></EastIcon>
                  </IconButton>

                  <Typography sx={{ paddingTop: "0.7rem" }}>
                    Carburant
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ marginTop: "-0.5rem", height: "10.5rem" }}
                >
                  <Box sx={{ display: "flex" }}>
                    <FormControl
                      sx={{ ml: "0.7rem" }}
                      component="fieldset"
                      variant="standard"
                    >
                      <FormGroup sx={{ width: "30rem" }}>
                        <FormControlLabel
                          control={<Checkbox name="GPL" />}
                          label="GPL"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Hybride" />}
                          label="Hybride"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Diesel" />}
                          label="Diesel"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl
                      sx={{ ml: "-8rem" }}
                      component="fieldset"
                      variant="standard"
                    >
                      <FormGroup sx={{ width: "20rem" }}>
                        <FormControlLabel
                          control={<Checkbox name="Electrique" />}
                          label="Electrique"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                              width: "15rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Essence" />}
                          label="Essence"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                      </FormGroup>
                    </FormControl>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box marginLeft="-2rem" marginTop="0.4rem">
              <Accordion
                sx={{ width: "89%" }}
                expanded={expanded === "Boite"}
                onChange={handleChange("Boite")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    "&.Mui-expanded": {
                      minHeight: 50,
                      borderBottom: "1px solid #dddddd",
                    },
                    "& .MuiAccordionSummary-content": {
                      margin: "0.2rem 0 ",
                    },
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#eeeeee",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  >
                    <EastIcon
                      sx={{
                        color: "#00B790",
                        fontSize: 30,
                      }}
                    ></EastIcon>
                  </IconButton>

                  <Typography sx={{ paddingTop: "0.7rem" }}>Boite</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ marginTop: "-0.5rem", height: "3.8rem" }}
                >
                  <Box sx={{ display: "flex" }}>
                    <FormControl
                      sx={{ ml: "0.7rem" }}
                      component="fieldset"
                      variant="standard"
                    >
                      <FormGroup sx={{ width: "30rem" }}>
                        <FormControlLabel
                          control={<Checkbox name="Manuelle" />}
                          label="Manuelle"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl
                      sx={{ ml: "-8rem" }}
                      component="fieldset"
                      variant="standard"
                    >
                      <FormGroup sx={{ width: "20rem" }}>
                        <FormControlLabel
                          control={<Checkbox name="Automatique" />}
                          label="Automatique"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                      </FormGroup>
                    </FormControl>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box marginLeft="-2rem" marginTop="0.4rem">
              <Accordion
                sx={{ width: "89%" }}
                expanded={expanded === "Couleur"}
                onChange={handleChange("Couleur")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    "&.Mui-expanded": {
                      minHeight: 50,
                      borderBottom: "1px solid #dddddd",
                    },
                    "& .MuiAccordionSummary-content": {
                      margin: "0.2rem 0 ",
                    },
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#eeeeee",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  >
                    <EastIcon
                      sx={{
                        color: "#00B790",
                        fontSize: 30,
                      }}
                    ></EastIcon>
                  </IconButton>

                  <Typography sx={{ paddingTop: "0.7rem" }}>Couleur</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ marginTop: "-0.5rem", height: "26.5rem" }}
                >
                  <Box sx={{ display: "flex" }}>
                    <FormControl
                      sx={{ ml: "0.7rem" }}
                      component="fieldset"
                      variant="standard"
                    >
                      <FormGroup sx={{ width: "50rem" }}>
                        <FormControlLabel
                          control={<Checkbox name="Violet" />}
                          label="Violet"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                         <FormControlLabel
                          control={<Checkbox name="" />}
                          label="Orange"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Orange" />}
                          label="Orange"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Multicolore" />}
                          label="Multicolore"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Jaune" />}
                          label="Jaune"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Doré" />}
                          label="Doré"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Blue" />}
                          label="Blue"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Beije" />}
                          label="Beije"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                       
                        
                      </FormGroup>
                    </FormControl>
                    <FormControl
                      sx={{ ml: "-8rem" }}
                      component="fieldset"
                      variant="standard"
                    >
                     <FormGroup sx={{ width: "30rem" }}>
                        <FormControlLabel
                          control={<Checkbox name="Vert" />}
                          label="Vert"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Rose" />}
                          label="Rose"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Noir" />}
                          label="Noir"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Marron" />}
                          label="Marron"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Gris" />}
                          label="Gris"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Bordeaux" />}
                          label="Bordeaux"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Blanc" />}
                          label="Blanc"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Argent" />}
                          label="Argent"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        
                      </FormGroup>
                    </FormControl>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box marginLeft="-2rem" marginTop="0.4rem" >
              <Accordion
                sx={{ width: "89%"}}
                expanded={expanded === "Carrosserie"}
                onChange={handleChange("Carrosserie")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    "&.Mui-expanded": {
                      minHeight: 50,
                      borderBottom: "1px solid #dddddd",
                      
                    },
                    "& .MuiAccordionSummary-content": {
                      margin: "0.2rem 0 ",
                     
                    },
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="add"
                    sx={{
                      backgroundColor: "#eeeeee",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  >
                    <EastIcon
                      sx={{
                        color: "#00B790",
                        fontSize: 30,
                      }}
                    ></EastIcon>
                  </IconButton>

                  <Typography sx={{ paddingTop: "0.7rem" }}>
                    Carroserie
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ marginTop: "-0.5rem", height: "20.1rem" }}
                >
                  <Box sx={{ display: "flex" }}>
                    <FormControl
                      sx={{ ml: "0.7rem" }}
                      component="fieldset"
                      variant="standard"
                    >
                      <FormGroup sx={{ width: "30rem" }}>
                        <FormControlLabel
                          control={<Checkbox name="break" />}
                          label="Break"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="SUV" />}
                          label="SUV"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Coupé" />}
                          label="Coupé"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                          <FormControlLabel
                          control={<Checkbox name="Utilitaire" />}
                          label="Utilitaire"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="4 * 4 " />}
                          label="4 * 4"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Berline" />}
                          label="Berline"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl
                      sx={{ ml: "-8rem" }}
                      component="fieldset"
                      variant="standard"
                    >
                      <FormGroup sx={{ width: "20rem" }}>
                        <FormControlLabel
                          control={<Checkbox name="Crossover" />}
                          label="Crossover"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                              width: "15rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Citadine" />}
                          label="Citadine"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                         <FormControlLabel
                          control={<Checkbox name="Pick up" />}
                          label="Pick up"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                              width: "15rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Monospace" />}
                          label="Monospace"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                         <FormControlLabel
                          control={<Checkbox name="Cabriolet" />}
                          label="Cabriolet"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                              width: "15rem",
                            },
                          }}
                        />
                        <FormControlLabel
                          control={<Checkbox name="Compacte" />}
                          label="Compacte"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "1.2rem",
                            },
                          }}
                        />
                      </FormGroup>
                      
                    </FormControl>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>

          <Box
            gridColumn="span 7"
            gridRow="span 3"
            p="1.5rem"
            borderRadius="0.55rem"
          >
            <Typography variant="h6">Sales By Category</Typography>

            <Typography p="0 0.6rem" fontSize="0.8rem">
              Breakdown of real states and information via category for revenue
              made for this year and total sales.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
