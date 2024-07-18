import React, { useState, useRef, useEffect } from "react";
import Stack from "@mui/material/Stack";
import useStyles from "./projects-styles";
import { Box, Typography } from "@mui/material";
import NavbarComponent from "../navbar/navbar";

const ProjectsComponent = () => {
  const classes = useStyles();
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
        <Stack id={"text1"} position={"fixed"} width={"100%"} gap={1} height={'300px'}>
          <NavbarComponent />
          <Typography variant={'body1'} fontWeight={500} color={"#fff"} position={'absolute'} top={200} left={30}>
            {"𝑳𝒐𝒐𝒌 𝒂𝒕 𝒎𝒚..."}
          </Typography>
          <Typography sx={{ fontSize: { xs: '60px', sm: '80px', md: '100px', lg: '150px', xl: '150px' }}} fontWeight={700} color={"#fff"} position={'absolute'} top={220} left={30}>
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
