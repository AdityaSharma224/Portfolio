import React, { useState, useRef, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import useStyles from "./projects-styles";
import { Box, Typography } from "@mui/material";
import NavbarComponent from "../navbar/navbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Preloader from "../preloader/loader";

const ProjectsComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const text1 = document.getElementById("text1");
      const text2 = document.getElementById("text2");
      const sectionTwo = document.getElementById("two");

      if (window.pageYOffset > sectionTwo.offsetTop) {
        text2.style.position = "fixed";
      } else {
        text2.style.position = "absolute";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Stack className={classes.wrapper} id="experience">
      <Preloader/>
      <Box
        id="one"
        sx={{
          position: "relative",
          width: "100vw",
          display: "flex",
          alignItems: "flex-start",
          backgroundColor: "#0C0C0F",
          height: {
            xs: "35vh",
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
                sx={{ cursor: "pointer", alignItems:'flex-end' }}
              >
                <Button variant="text" startIcon={<ArrowBackIcon htmlColor="#fff"/>} sx={{ width: "120px", color:'#fff', textTransform:'none' }}>
                  {"Go Back"}
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Typography
            variant={"body1"}
            fontWeight={500}
            color={"#fff"}
            position={"absolute"}
            top={200}
            left={30}
          >
            {"𝑳𝒐𝒐𝒌 𝒂𝒕 𝒎𝒚..."}
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
            position={"absolute"}
            top={220}
            left={30}
          >
            {"PROJECTS"}
          </Typography>
        </Stack>
      </Box>
      <Box
        component="section"
        id="two"
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Stack id={"text2"} position={"absolute"}></Stack>
      </Box>
    </Stack>
  );
};

export default ProjectsComponent;
