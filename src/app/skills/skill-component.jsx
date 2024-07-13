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
  [theme.breakpoints.down("xxs")]: {
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
            alignItems: "center",
            padding: { xs: 10, sm: 10, md: 15, lg: 25, xl: 25 },
            justifyContent: "space-between",
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
                  color={"#D3D3D3"}
                  sx={{
                    typography: {
                      xs: "h7",
                      sm: "h7",
                      md: "h6",
                      lg: "h5",
                      xl: "h6",
                    },
                  }}
                >
                  {"Top"}
                </Typography>
                <Typography
                  color={"#fff"}
                  sx={{
                    typography: {
                      xs: "h6",
                      sm: "h6",
                      md: "h5",
                      lg: "h3",
                      xl: "h3",
                    },
                  }}
                >
                  {"6.09%"}
                </Typography>
              </Stack>
              <Stack alignSelf={"flex-start"}>
                <Typography
                  color={"#D3D3D3"}
                  sx={{
                    typography: {
                      xs: "h7",
                      sm: "h7",
                      md: "h6",
                      lg: "h5",
                      xl: "h6",
                    },
                  }}
                >
                  {" Leetcode Contest Rating"}
                </Typography>
                <Typography
                  color={"#D3D3D3"}
                  sx={{
                    typography: {
                      xs: "h6",
                      sm: "h6",
                      md: "h5",
                      lg: "h3",
                      xl: "h3",
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
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "20%",
                    sm: "20%",
                    md: "20%",
                    lg: "20%",
                    xl: "20%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "40%",
                    sm: "40%",
                    md: "40%",
                    lg: "40%",
                    xl: "40%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "80%",
                    sm: "80%",
                    md: "80%",
                    lg: "80%",
                    xl: "80%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "70%",
                    sm: "70%",
                    md: "70%",
                    lg: "70%",
                    xl: "70%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "50%",
                    sm: "50%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "40%",
                    sm: "40%",
                    md: "40%",
                    lg: "40%",
                    xl: "40%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "30%",
                    sm: "30%",
                    md: "30%",
                    lg: "30%",
                    xl: "30%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "20%",
                    sm: "20%",
                    md: "20%",
                    lg: "20%",
                    xl: "20%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                  backgroundColor: "#FFA500",
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
              <Stack
                sx={{
                  height: {
                    xs: "10%",
                    sm: "10%",
                    md: "10%",
                    lg: "10%",
                    xl: "10%",
                  },
                  width: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                className={classes.bar}
              ></Stack>
            </Stack>
          </Stack>
          <Stack
            flexDirection={"row"}
            sx={{ gap: { xs: 5, sm: 5, md: 8, lg: 15, xl: 15 } }}
          >
            <Stack
              sx={{
                backgroundColor: "#282828",
                paddingX: 2,
                paddingY: 1,
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  typography: {
                    xs: "h7",
                    sm: "h7",
                    md: "h6",
                    lg: "h5",
                    xl: "h6",
                  },
                }}
                fontWeight={700}
                color={"green"}
              >
                {"Easy"}
              </Typography>
              <Typography
                sx={{
                  typography: {
                    xs: "h7",
                    sm: "h7",
                    md: "h6",
                    lg: "h5",
                    xl: "h6",
                  },
                }}
                fontWeight={700}
                color={"#D3D3D3"}
              >
                {"366/807"}
              </Typography>
            </Stack>
            <Stack
              sx={{
                backgroundColor: "#282828",
                paddingX: 2,
                paddingY: 1,
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  typography: {
                    xs: "h7",
                    sm: "h7",
                    md: "h6",
                    lg: "h5",
                    xl: "h6",
                  },
                }}
                fontWeight={700}
                color={"orange"}
              >
                {"Medium"}
              </Typography>
              <Typography
                sx={{
                  typography: {
                    xs: "h7",
                    sm: "h7",
                    md: "h6",
                    lg: "h5",
                    xl: "h6",
                  },
                }}
                fontWeight={700}
                color={"#D3D3D3"}
              >
                {"575/1679"}
              </Typography>
            </Stack>
            <Stack
              sx={{
                backgroundColor: "#282828",
                paddingX: 2,
                paddingY: 1,
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  typography: {
                    xs: "h7",
                    sm: "h7",
                    md: "h6",
                    lg: "h5",
                    xl: "h6",
                  },
                }}
                fontWeight={700}
                color={"red"}
              >
                {" "}
                {"Hard"}
              </Typography>
              <Typography
                sx={{
                  typography: {
                    xs: "h7",
                    sm: "h7",
                    md: "h6",
                    lg: "h5",
                    xl: "h6",
                  },
                }}
                fontWeight={700}
                color={"#D3D3D3"}
              >
                {"120/713"}
              </Typography>
            </Stack>
          </Stack>
          <Typography
            sx={{
              marginBottom: 1,
              fontSize: "130px",
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              },
            }}
            color={"#fff"}
          >
            {"𝗌𝗄𝗂ᥣᥣ𝗌"}
          </Typography>
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
          duration="rotating-anim 4s"
          icon={Python}
        />
        <OrbitWithIcon
          color=""
          size="420px"
          duration="rotating-anim 6s"
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
