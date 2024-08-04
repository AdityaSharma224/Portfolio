import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import useStyles from "./article-styles";
import { Box, IconButton, Typography } from "@mui/material";
import NavbarComponent from "../navbar/navbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import ArticleCard from "../components/article-card";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DSA_INFO, GPT_INFO, HANDBOOK_INFO } from "../constants";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ArticleComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const text1 = document.getElementById("text1");
      const sectionTwo = document.getElementById("two");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Stack className={classes.wrapper} id="experience">
      <Box
        id="one"
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          backgroundColor: "#0C0C0F",
          height: {
            xs: "30vh",
            sm: "38vh",
            md: "43vh",
            lg: "43vh",
            xl: "43vh",
          },
        }}
      >
        <Stack
          id={"text1"}
          position={"fixed"}
          width={"100%"}
          gap={1}
          height={"300px"}
        >
          <Stack
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
            }}
          >
            <NavbarComponent />
          </Stack>
          <Stack
            sx={{
              display: {
                xs: "flex",
                sm: "none",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <Stack flexDirection={"row"} width={"100%"}>
              <Stack
                className={classes.itemStack}
                width={"100%"}
                onClick={() => navigate("/")}
                sx={{ cursor: "pointer" }}
                padding={1}
              >
                <Typography
                  sx={{
                    typography: {
                      xs: "h5",
                      sm: "h5",
                      md: "h6",
                      lg: "h5",
                      xl: "h5",
                    },
                    fontWeight: { xs: 700, sm: 700, md: 700, lg: 700, xl: 700 },
                  }}
                  color={"#fff"}
                >
                  {"ADITYA SHARMA"}
                </Typography>
                <Typography
                  sx={{
                    typography: {
                      xs: "h5",
                      sm: "h5",
                      md: "h6",
                      lg: "h5",
                      xl: "h5",
                    },
                    fontWeight: { xs: 700, sm: 700, md: 700, lg: 700, xl: 700 },
                  }}
                  color={"#fff"}
                >
                  {"PORTFOLIO"}
                </Typography>
              </Stack>
              <Stack
                width={"60%"}
                onClick={() => navigate("/")}
                sx={{ cursor: "pointer", alignItems: "flex-end" }}
              >
                <Button
                  variant="text"
                  startIcon={<ArrowBackIcon htmlColor="#fff" />}
                  sx={{ width: "120px", color: "#fff", textTransform: "none" }}
                >
                  {"Go Back"}
                </Button>
              </Stack>
            </Stack>
          </Stack>{" "}
          <Stack
            width={"100%"}
            position={"relative"}
            sx={{
              top: { xs: 40, sm: 150, md: 180, lg: 180, xl: 180 },
              left: { xs: 20, sm: 20, md: 20, lg: 20, xl: 20 },
            }}
          >
            <Typography variant={"body1"} fontWeight={500} color={"#fff"}>
              {"𝑳𝒐𝒐𝒌 𝒂𝒕 𝒎𝒚 𝒑𝒖𝒃𝒍𝒊𝒔𝒉𝒆𝒅..."}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "60px",
                  sm: "80px",
                  md: "100px",
                  lg: "150px",
                  xl: "150px",
                },
              }}
              fontWeight={700}
              color={"#fff"}
            >
              {"ARTICLES"}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Stack
        component="section"
        id="two"
        sx={{
          position: "relative",
          height: "auto",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
        paddingY={5}
        paddingX={2}
        gap={2}
      >
        <Stack
          padding={2}
          bgcolor={"#fff"}
          flexDirection={"column"}
          gap={4}
          alignSelf={"flex-start"}
          width={"100%"}
          height={"auto"}
        >
          <Accordion
            defaultExpanded
            disableGutters
            className={classes.accordion}
          >
            <AccordionSummary
              id="panel1-header"
              aria-controls="panel1-content"
              expandIcon={<ExpandMoreIcon fontSize="large" />}
              sx={{
                color: "#000",
                fontWeight: 700,
                fontSize: isMdDown ? "20px" : "40px",
              }}
            >
              {"DATA STRUCTURES AND ALGORITHMS"}
            </AccordionSummary>
            <AccordionDetails>
              {DSA_INFO.map((article, index) => (
                <Stack
                  key={index}
                  width="100%"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems={"center"}
                  sx={{ borderBottom: "1px solid #D3D3D3", padding: 1 }}
                >
                  <Typography variant={isMdDown ? 'body1' : 'h6'} fontWeight={500}>
                    {article.title}
                  </Typography>
                  <IconButton href={article.link} target="_blank">
                    <OpenInNewIcon fontSize="medium" htmlColor="#1976d2" />
                  </IconButton>
                </Stack>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            defaultExpanded
            disableGutters
            className={classes.accordion}
          >
            <AccordionSummary
              aria-controls="panel2-content"
              id="panel2-header"
              expandIcon={<ExpandMoreIcon fontSize="large" />}
              sx={{
                color: "#000",
                fontSize: isMdDown ? "20px" : "40px",
                fontWeight: 700,
              }}
            >
              {"GENERAL HANDBOOK"}
            </AccordionSummary>
            <AccordionDetails>
              {HANDBOOK_INFO.map((article, index) => (
                <Stack
                  key={index}
                  width="100%"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems={"center"}
                  sx={{ borderBottom: "1px solid #D3D3D3", padding: 1 }}
                >
                  <Typography variant={isMdDown ? 'body1' : 'h6'} fontWeight={500}>
                    {article.title}
                  </Typography>
                  <IconButton href={article.link} target="_blank">
                    <OpenInNewIcon fontSize="medium" htmlColor="#1976d2" />
                  </IconButton>
                </Stack>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            defaultExpanded
            disableGutters
            className={classes.accordion}
          >
            <AccordionSummary
              aria-controls="panel3-content"
              id="panel3-header"
              expandIcon={<ExpandMoreIcon fontSize="large" />}
              sx={{
                color: "#000",
                fontSize: isMdDown ? "20px" : "40px",
                fontWeight: 700,
              }}
            >
              {"CHAT-GPT"}
            </AccordionSummary>
            <AccordionDetails>
              {GPT_INFO.map((article, index) => (
                <Stack
                  key={index}
                  width="100%"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems={"center"}
                  sx={{ borderBottom: "1px solid #D3D3D3", padding: 1 }}
                >
                  <Typography variant={isMdDown ? 'body1' : 'h6'} fontWeight={500}>
                    {article.title}
                  </Typography>
                  <IconButton href={article.link} target="_blank">
                    <OpenInNewIcon fontSize="medium" htmlColor="#1976d2" />
                  </IconButton>
                </Stack>
              ))}
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ArticleComponent;
