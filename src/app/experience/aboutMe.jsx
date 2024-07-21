import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import useStyles from "./experience-styles";
import { Box, Typography, keyframes } from "@mui/material";
import { styled } from "@mui/system";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {Divider} from "@mui/material";

const flicker = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const flip = keyframes`
  0% { transform: translateY(0); }
  30% { transform: translateY(-100%); }
  60% { transform: translateY(-200%); }
  100% { transform: translateY(0); }
`;

const Wrap = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "120px",
  width: "100%",
  color: "#000",
  gap: "70px",
  fontFamily: "monospace",
  fontSize: "80px",
  "&:before": {
    content: '"["',
    color: "#000",
    animation: `${flicker} 1s infinite`,
  },
  "&:after": {
    content: '"]"',
    color: "#000",
    animation: `${flicker} 1s infinite`,
  },
  [theme.breakpoints.down("md")]: {
    gap: "50px",
    fontSize: "50px",
    height: "80px",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "50px",
    fontSize: "40px",
    height: "60px",
  },
}));

const Flip = styled(Box)(({ theme }) => ({
  display: "inline-block",
  height: "50px",
  overflow: "hidden",
  fontSize: "40px",
  gap: 50,
  position: "relative",
  span: {
    display: "block",
    animation: `${flip} 6s infinite`,
    transition: "0.5s",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
    height: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    height: "30px",
  },
}));

const AboutComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Stack
      className={classes.wrapper2}
      sx={{
        gap: { xs: 6, sm: 6, md: 10, lg: 12, xl: 12 },
      }}
      id="experience"
    >
      <Wrap>
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h5", md: "h5", lg: "h4", xl: "h4" },
          }}
        >
          Keep
        </Typography>
        <Flip>
          <span>Aiming</span>
          <span>Trying</span>
          <span>Hustling</span>
        </Flip>
      </Wrap>
      <Stack
        flexDirection={"column"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
        width={"65%"}
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "65%",
            xl: "65%",
          },
        }}
      >
        <Typography alignSelf={"flex-start"} variant="h7">
          {"𝑾𝒉𝒂𝒕 𝒚𝒐𝒖 𝒄𝒂𝒏 𝒆𝒙𝒑𝒆𝒄𝒕 𝒇𝒓𝒐𝒎 𝒎𝒆:"}
        </Typography>
        <Typography
          alignSelf={"flex-start"}
          width={"100%"}
          sx={{
            fontSize: {
              xs: "18px",
              sm: "18px",
              md: "30px",
              lg: "40px",
              xl: "40px",
            },
          }}
          fontWeight={540}
        >
          {
            "As a full-stack developer, I bring a blend of creativity and technical expertise. You can expect clean, efficient code, innovative solutions, and a collaborative approach. I am committed to continuous learning and delivering high-quality, scalable applications that meet your needs. Let’s build something great together!"
          }
        </Typography>
        <Stack
          gap={2}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          width={"100%"}
          marginTop={2}
          alignItems={"center"}
        >
          <Typography fontSize={"20px"} color={"#000"}>
            {"More about me"}
          </Typography>
          <Stack
            padding={1}
            border={"1px solid #000"}
            borderRadius={"50%"}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/about-me")}
          >
            <ArrowOutwardIcon fontSize="medium" />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        flexDirection={"column"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "65%",
            xl: "65%",
          },
        }}
      >
        <Stack
          sx={{
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "space-between",
              lg: "space-between",
              xl: "space-between",
            },
            flexDirection:{
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }
          }}
          gap={2}
          width={"100%"}
          alignItems={"center"}
          marginTop={5}
        >
          <Typography
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
                lg: "50%",
                xl: "50%",
              },
              typography:{
                xs: "h4",
                sm: "h4",
                md: "h4",
                lg: "h3",
                xl: "h3",
              },
              fontWeight:{
                xs: 700,
                sm: 700,
                md: 700,
                lg: 700,
                xl: 700,
              }
            }}
          >
            {
              "SOME OF THE MOST VIEWED TUTORIALS AND ARTICLES ON DATA STRUCTURES AND ALGORITHMS"
            }
          </Typography>
          <Stack gap={1} alignItems={"flex-start"}>
            <Typography variant="subtitle3" fontWeight={500} color={"#7C7C7C"}>
              {
                "These technical articles are publiched at GeeksforGeeks website, I wrote these articles during my internship tenure at GeeksforGeeks"
              }
            </Typography>
            <Stack
              gap={2}
              flexDirection={"row"}
              justifyContent={"flex-start"}
              width={"100%"}
              marginTop={2}
              alignItems={"center"}
            >
              <Typography fontSize={"20px"} color={"#000"}>
                {"Check out content"}
              </Typography>
              <Stack
                padding={1}
                border={"1px solid #000"}
                borderRadius={"50%"}
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/about-me")}
              >
                <ArrowOutwardIcon fontSize="medium" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack borderBottom={'1px solid #D3d3d3'} alignSelf={'center'} width={'95%'}/>
      <Stack>
       
      </Stack>

    </Stack>
  );
};

export default AboutComponent;
