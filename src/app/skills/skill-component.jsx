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
import NEXTComet from "../../assets/nextComet.png";
import CPPComet from "../../assets/cppComet.png";
import Code from "../../assets/code.png";
import { createTheme } from "@mui/material";
import LeetcodeImg from "../../assets/leetcodeStats.png";
import Position from "../../assets/position.png";
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
  },
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.down("xss")]: {
    width: "100%",
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
    width: "calc(" + size + " * 1.5)",
    height: "calc(" + size + " * 1.5)",
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

const SkillComponent = () => {
  const classes = useStyles();
  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        height: {
          xs: "100vh",
          sm: "100vh",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
        },
        width: {
          xs: "100vw",
          sm: "100vw",
          md: "100vw",
          lg: "100vw",
          xl: "100vw",
        },
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
        height={"100%"}
        sx={{
          backgroundColor: "#000",
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
            backgroundColor: "#000",
            width: "100%",
            height: "100%",
            border: "2px solid #000",
            alignItems: "center",
            padding: 4,
            justifyContent:'center',
          }}
        >
          <Stack gap={6} alignSelf={'center'} height={'50%'} alignItems={'center'}justifyContent={'space-between'}>
            <Stack
              component={"img"}
              src={LeetcodeImg}
              sx={{
                height: {xs: 150, sm: 150, md: 200, lg: 300, xl: 300 },
                width: {xs: 350, sm: 350, md: 500, lg: 700, xl: 700 },
              }}
            />
            <Stack
              component={"img"}
              src={Position}
              sx={{
                height: {xs: 150, sm: 150, md: 200, lg: 300, xl: 300 },
                width: {xs: 350, sm: 350, md: 500, lg: 700, xl: 700 },
              }}
            />
          </Stack>
        </Stack>
      </Stack>
      <SolarSystem>
        <Box
          sx={{
            position: "absolute",
            top: { xxs: "3em", xs: "3em", sm: "10em" },
            left: { xxs: "1em", xs: "2em", sm: "18em" },
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            top: { xxs: "15em", xs: "4em", sm: "22em" },
            right: { xxs: "1em", xs: "-1em", sm: "12em" },
          }}
        ></Box>
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
        <OrbitWithIcon
          color="blue"
          size="200px"
          duration="rotating-anim 3s"
          icon={ReactImg}
        />
        <OrbitWithIcon
          color=""
          size="320px"
          duration="rotating-anim 6.5s"
          icon={Python}
        />
        <OrbitWithIcon
          color=""
          size="420px"
          duration="rotating-anim 8s"
          icon={JS}
        />
        <OrbitWithIcon
          color="white"
          size="520px"
          duration="rotating-anim 8s"
          icon={NodeJs}
        />
        <OrbitWithIcon
          color=""
          size="620px"
          duration="rotating-anim 10s"
          icon={html5}
        />
        <OrbitWithIcon
          color=""
          size="720px"
          duration="rotating-anim 12s"
          icon={CSS}
        />
      </SolarSystem>
    </Stack>
  );
};

export default SkillComponent;
