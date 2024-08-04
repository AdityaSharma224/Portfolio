import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Typography, styled } from "@mui/material";
import Python from "../../assets/python.png"; // Example icon for Mercury
import ReactImg from "../../assets/react.png"; // Example icon for Venus
import JS from "../../assets/js.png";
import NodeJs from "../../assets/node.png";
import html5 from "../../assets/html.png";
import Aster from "../../assets/pngegg.png";
import CSS from "../../assets/css.png";
import Code from "../../assets/code.png";
import { createTheme } from "@mui/material";
import useStyles from "./skills-styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 400,
      xs: 500,
      sm: 600,
      md: 1000,
      lg: 1300,
      xl: 1400,
    },
  },
});

const SolarSystem = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "50%",
  height: "100%",
  background: "#000",
  overflow: "hidden",
  [theme.breakpoints.down("xl")]: {
    width: "50%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "50%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.down("xs")]: {
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.down("xxs")]: {
    width: "100%",
    height: "100%",
  },
});

const OrbitWithIcon = styled(Box)(({ theme, color, size, duration, icon }) => ({
  position: "absolute",
  border: "0.04px solid #D3D3D3",
  borderRadius: "50%",
  color: "white",
  width: size,
  height: size,
  animation: `${duration} linear infinite`,
  "&::after": {
    content: '""',
    position: "absolute",
    width: "70px",
    height: "70px",
    transform: "translateX(-50%)",
    top: "-32px",
    left: "50%",
    borderRadius: "50%",
    background: color,
    backgroundImage: `url(${icon})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      width: "50px",
      height: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40px",
      height: "40px",
    },
  },
  [theme.breakpoints.down("xl")]: {
    width: "calc(" + size + " * 0.9)",
    height: "calc(" + size + " * 0.9)",
  },
  [theme.breakpoints.down("lg")]: {
    width: "calc(" + size + " * 0.8)",
    height: "calc(" + size + " * 0.8)",
  },
  [theme.breakpoints.down("md")]: {
    width: "calc(" + size + " * 0.7)",
    height: "calc(" + size + " * 0.7)",
    "&::before": {
      width: "50px",
      height: "50px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "calc(" + size + " * 0.4)",
    height: "calc(" + size + " * 0.4)",
  },
  [theme.breakpoints.down("xs")]: {
    width: "calc(" + size + " * 1.3)",
    height: "calc(" + size + " * 1.3)",
  },
  [theme.breakpoints.down("xxs")]: {
    width: "calc(" + size + " * 0.6)",
    height: "calc(" + size + " * 0.6)",
  },
}));

const Sun = styled(Box)({
  width: "100px",
  height: "100px",
  background: "yellow",
  backgroundImage: `url(${Code})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: "50%",
  boxShadow: "0 0 20px yellow, 0 0 60px rgb(255, 81, 0)",
  [theme.breakpoints.down("md")]: {
    width: "70px",
    height: "70px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50px",
    height: "50px",
  },
});

const heights = [
  "10%",
  "10%",
  "10%",
  "10%",
  "20%",
  "40%",
  "80%",
  "70%",
  "50%",
  "40%",
  "30%",
  "20%",
  "10%",
  "10%",
  "10%",
  "10%",
  "10%",
  "10%",
  "10%",
  "10%",
  "10%",
  "10%",
];

const widths = {
  xs: "10px",
  sm: "10px",
  md: "10px",
  lg: "20px",
  xl: "20px",
};

const technologies = [
  "React",
  "Wails",
  "Javascript",
  "HTML5",
  "CSS",
  "C++",
  "Java",
  "Python",
  "MUI",
  "GSAP",
];

const SkillSection = () => {
  const classes = useStyles();
  const StackBars = () => (
    <>
      {heights.map((height, index) => (
        <Stack
          key={index}
          sx={{
            height: {
              xs: height,
              sm: height,
              md: height,
              lg: height,
              xl: height,
            },
            width: widths,
            ...(index === heights.length - 6 && { backgroundColor: "#FFA500" }),
          }}
          className={classes.bar}
        ></Stack>
      ))}
    </>
  );
  return (
    <Stack
      height={"100%"}
      width={"100%"}
      sx={{
        backgroundColor: "#fff",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        },
      }}
      id="skills"
    >
      <Stack
        height={"auto"}
        sx={{
          backgroundColor: "#fff",
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "50%",
            xl: "50%",
          },
         
        }}
      >
        <Stack
          sx={{
            backgroundColor: "#fff",
            width: "100%",
            gap: { xs: 3, sm: 3, md: 8, lg: 10, xl: 10 },
            height: {
              xs: "50%",
              sm: "50%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            },
            alignItems: "center",
            padding: { xs: 3, sm: 5, md: 15, lg: 15, xl: 15 },
            justifyContent: "flex-start",
          }}
        >
          <Stack sx={{ borderRadius: "15px" }} flexDirection={"column"}>
            <Stack
              width={"100%"}
              height={"100px"}
              padding={1}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Stack alignSelf={"flex-start"}>
                <Typography
                  color={"#000"}
                  sx={{
                    typography: {
                      xs: "h7",
                      sm: "h7",
                      md: "h6",
                      lg: "h5",
                      xl: "h5",
                    },
                    fontWeight: {
                      xs: 600,
                      sm: 600,
                      md: 700,
                      lg: 700,
                      xl: 700,
                    },
                  }}
                >
                  {"Top"}
                </Typography>
                <Typography
                  color={"#000"}
                  sx={{
                    typography: {
                      xs: "h4",
                      sm: "h4",
                      md: "h4",
                      lg: "h3",
                      xl: "h3",
                    },
                    fontWeight: {
                      xs: 600,
                      sm: 600,
                      md: 700,
                      lg: 700,
                      xl: 700,
                    },
                  }}
                >
                  {"6.09%"}
                </Typography>
              </Stack>
              <Stack alignSelf={"flex-start"}>
                <Typography
                  color={"#000"}
                  sx={{
                    typography: {
                      xs: "h7",
                      sm: "h7",
                      md: "h6",
                      lg: "h5",
                      xl: "h5",
                    },
                    fontWeight: {
                      xs: 600,
                      sm: 600,
                      md: 700,
                      lg: 700,
                      xl: 700,
                    },
                  }}
                >
                  {" Leetcode Contest Rating"}
                </Typography>
                <Typography
                  color={"#000"}
                  sx={{
                    typography: {
                      xs: "h4",
                      sm: "h4",
                      md: "h4",
                      lg: "h3",
                      xl: "h3",
                    },
                    fontWeight: {
                      xs: 600,
                      sm: 600,
                      md: 700,
                      lg: 700,
                      xl: 700,
                    },
                  }}
                  textAlign={"right"}
                >
                  {"1863"}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              flexDirection={"row"}
              height={"250px"}
              padding={2}
              width={"fit-content"}
              alignItems={"flex-end"}
              sx={{
                gap: {
                  xs: 0.5,
                  sm: 0.5,
                  md: 1,
                  lg: 1,
                  xl: 1,
                },
              }}
            >
              <StackBars />
            </Stack>
          </Stack>
          <Stack
            flexDirection={"row"}
            sx={{ gap: { xs: 3, sm: 3, md: 8, lg: 15, xl: 15 } }}
          >
            {["Easy", "Medium", "Hard"].map((level, idx) => (
              <Stack
                key={level}
                sx={{
                  backgroundColor: "#282828",
                  paddingX: 2,
                  paddingY: 1,
                  borderRadius: "5px",
                  width: { xs: "110px", md: "130px", lg: "160px" },
                }}
                alignItems="center"
              >
                <Typography
                  sx={{
                    typography: { xs: "body2", md: "h6" },
                    fontWeight: 700,
                  }}
                  color={
                    level === "Easy"
                      ? "green"
                      : level === "Medium"
                      ? "orange"
                      : "red"
                  }
                >
                  {level}
                </Typography>
                <Typography
                  sx={{
                    typography: { xs: "body2", md: "h6" },
                    fontWeight: 700,
                  }}
                  color="#D3D3D3"
                >
                  {`${
                    level === "Easy"
                      ? "366 / 807"
                      : level === "Medium"
                      ? "575 / 1679"
                      : "120 / 713"
                  }`}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <SolarSystem>
        <Sun />
        <img
          src={Aster}
          height={"320px"}
          width={"320px"}
          style={{
            position: "absolute",
            userSelect: "none",
            [theme.breakpoints.down("sm")]: {
              display: "none",
              height: 0,
              width: 0,
            },
          }}
        />
        {[
          {
            color: "blue",
            size: "200px",
            duration: "rotating-anim 3s",
            icon: ReactImg,
          },
          { size: "320px", duration: "rotating-anim 4s", icon: Python },
          { size: "420px", duration: "rotating-anim 6s", icon: JS },
          {
            color: "white",
            size: "520px",
            duration: "rotating-anim 8s",
            icon: NodeJs,
          },
          { size: "620px", duration: "rotating-anim 10s", icon: html5 },
          { size: "720px", duration: "rotating-anim 12s", icon: CSS },
        ].map((orbitProps, index) => (
          <OrbitWithIcon key={index} {...orbitProps} />
        ))}
      </SolarSystem>
    </Stack>
  );
};

export default SkillSection;
