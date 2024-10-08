import React, { useState, useRef, useEffect } from "react";
import Stack from "@mui/material/Stack";
import useStyles from "./experience-styles";
import { Box, Typography } from "@mui/material";
import NavbarComponent from "../navbar/navbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import My_IMAGE from "../../assets/myimg.jpg";
import { useMediaQuery, useTheme } from "@mui/material";

const experienceInfo = [
  {
    date: "𝑴𝒂𝒚, 2024  -  𝑷𝒓𝒆𝒔𝒆𝒏𝒕",
    company: "𝑪𝑨𝑺𝑻 𝑺𝒐𝒇𝒕𝒘𝒂𝒓𝒆",
    role: "𝑺𝒐𝒇𝒕𝒘𝒂𝒓𝒆 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓",
    details: [
      "Frontend development of the CAST Imaging Analyzer using React.js, delivering a robust platform for code analysis.",
      "Engineered an intuitive interface for efficient navigation, and initiation of the scanning process, ensuring a user-friendly experience.",
    ],
  },
  {
    date: "𝑶𝒄𝒕𝒐𝒃𝒆𝒓, 2023 - 𝑴𝒂𝒚, 2024",
    company: "𝑪𝑨𝑺𝑻 𝑺𝒐𝒇𝒕𝒘𝒂𝒓𝒆",
    role: "𝑺𝒐𝒇𝒕𝒘𝒂𝒓𝒆 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓 - 𝑰𝒏𝒕𝒆𝒓𝒏",
    details: [
      "Developed a delicate desktop application to facilitate comprehensive source code analysis, understanding and architectural insights.",
    ],
  },
  {
    date: "𝑱𝒖𝒍𝒚, 2023 - 𝑶𝒄𝒕𝒐𝒃𝒆𝒓, 2023",
    company: "𝑪𝒐𝒏𝒕𝒍𝒐",
    role: "𝑺𝒐𝒇𝒕𝒘𝒂𝒓𝒆 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓 - 𝑰𝒏𝒕𝒆𝒓𝒏",
    details: [
      "Development of long-term memory capabilities for large language models, enhancing response relevance and accuracy by 65%.",
      "Implemented innovative AI algorithms that improved overall system efficiency, resulting in a 30% reduction in response.",
      "Databases Integration (Redis, Pinecone) for vector storage.",
    ],
  },
  {
    date: "𝑵𝒐𝒗𝒆𝒎𝒃𝒆𝒓, 2022 - 𝑱𝒖𝒏𝒆, 2023",
    company: "𝑮𝒆𝒆𝒌𝒔𝒇𝒐𝒓𝑮𝒆𝒆𝒌𝒔",
    role: "𝑴𝒆𝒎𝒃𝒆𝒓 𝒐𝒇 𝑻𝒆𝒄𝒉𝒏𝒊𝒄𝒂𝒍 𝑺𝒕𝒂𝒇𝒇 - 𝑰𝒏𝒕𝒆𝒓𝒏",
    details: [
      "Worked closely with the Core Data Structure and Algorithm team at GeeksforGeeks Office, Noida.",
      "Designed and Developed the Most Important Data Structure and Algorithm Official Tutorials eg., Dijkstra's Algorithm, Set, Map, Max-Heap, and Min-Heap.",
      "Improved Customer/Viewer Experience by Delivering top quality content and Visuals.",
    ],
  },
];

const hackathonInfo = [
  {
    date: "𝑼𝑰𝑬𝑻 𝑷𝒖𝒏𝒋𝒂𝒃 𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚",
    company: "𝑪𝒐𝒇𝒇𝒆𝒆 & 𝑪𝒐𝒅𝒆",
    role: "Open Track Winner",
    details: [
      "Frontend development of a web application in which user can send/share data in a secured end-to-end encrypted channel.",
    ],
  },
  {
    date: "𝑪𝒉𝒊𝒕𝒌𝒂𝒓𝒂 𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚",
    company: "𝑪𝒐𝒅𝒆𝑨𝒕𝒉𝒐𝒏",
    role: "2nd Position",
    details: ["Secured 2nd position in univeristy DSA CodeAthon"],
  },
];

const ExperienceComponent = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
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
                      fontWeight: {
                        xs: 700,
                        sm: 700,
                        md: 700,
                        lg: 700,
                        xl: 700,
                      },
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
                      fontWeight: {
                        xs: 700,
                        sm: 700,
                        md: 700,
                        lg: 700,
                        xl: 700,
                      },
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
                    sx={{
                      width: "120px",
                      color: "#fff",
                      textTransform: "none",
                    }}
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
                {"𝑳𝒆𝒕 𝒎𝒆 𝒔𝒉𝒂𝒓𝒆 𝒇𝒆𝒘 𝒅𝒆𝒕𝒂𝒊𝒍𝒔..."}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xxs: "40px",
                    xs: "50px",
                    sm: "80px",
                    md: "100px",
                    lg: "150px",
                    xl: "150px",
                  },
                }}
                fontWeight={700}
                color={"#fff"}
              >
                {"ABOUT ME"}
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Stack
          id="two"
          sx={{
            position: "relative",
            alignItems: "center",
            backgroundColor: "#fff",
            height: "150vh",
          }}
          paddingY={5}
          paddingX={2}
          gap={2}
        >
          <Stack
            padding={2}
            bgcolor={"#fff"}
            flexDirection={isMdDown ? "column" : "row"}
            gap={4}
            alignSelf={"flex-start"}
            width={"100%"}
            height={"auto"}
                      >
            {/* about me section */}
            <Stack
              width={"100%"}
              height={"100%"}
              bgcolor={"#fff"}
              flexDirection={isMdDown ? "column" : "row"}
              gap={4}
              order={isMdDown ? 1 : 2}
            >
              <Stack
                alignItems={"flex-start"}
                width={isMdDown ? "100%" : "70%"}
                height={"100%"}
                gap={1}
              >
                <Typography variant={isMdDown ? "h4" : "h3"}>
                  {"Hello, My name is Aditya Sharma"}
                </Typography>
                <Typography
                  variant={isMdDown ? "body2" : "body1"}
                  color={"#767676"}
                  lineHeight={1.5}
                  letterSpacing={1}
                >
                  {
                    "I am a dynamic software engineer who graduated from Chitkara University with a degree in Computer Science and Engineering. Currently, I am working as a Software Development Engineer at CAST Software’s R&D team. My professional journey began at GeeksforGeeks, where I collaborated with the core DSA team, honing my skills in full-stack technologies. Following this, I gained valuable experience at Conto before joining CAST Software. I am passionate about learning new technologies and continuously expanding my skill set. My curiosity drives me to stay updated with the latest advancements in the tech world, ensuring that I can contribute effectively to any project I undertake. With a strong foundation in both front-end and back-end development, I am committed to delivering high-quality software solutions and am always eager to take on new challenges."
                  }
                </Typography>
              </Stack>
              <Stack
                width={"30%"}
                height={"100%"}
                alignItems={"flex-end"}
                justifyContent={"flex-start"}
                display={isMdDown ? "none" : "flex"}
              >
                <Stack
                  component={"img"}
                  src={My_IMAGE}
                  height={"330px"}
                  width={"100%"}
                />
              </Stack>
            </Stack>
            {/* Experience section */}
            <Stack
              width={"100%"}
              height={"100%"}
              bgcolor={"#fff"}
              gap={isMdDown ? 2 : 4}
              order={isMdDown ? 2 : 1}
            >
              <Stack alignItems="flex-start" width="100%" height="100%" gap={2}>
                <Typography variant={isMdDown ? "h4" : "h2"} fontWeight={700}>
                  {"MY JOURNEY"}
                </Typography>
                <Stack borderBottom="1px solid #D3d3d3" width="100%" />
                {experienceInfo.map((job, index) => (
                  <React.Fragment key={index}>
                    <Stack
                      gap={isMdDown ? 2 : 6}
                      width="100%"
                      flexDirection={isMdDown ? "column" : "row"}
                    >
                      <Stack width={isMdDown ? "100%" : "30%"}>
                        <Typography variant="body1">{job.date}</Typography>
                        <Typography variant="h6">{job.company}</Typography>
                      </Stack>
                      <Stack
                        alignItems="flex-start"
                        width={isMdDown ? "100%" : "70%"}
                        gap={1}
                      >
                        <Typography
                          variant={'body1'}
                          lineHeight={1.5}
                          letterSpacing={1}
                        >
                          {job.role}
                        </Typography>
                        {job.details.map((detail, i) => (
                          <Typography
                            key={i}
                            variant={isMdDown ? "subtitle2" : "body2"}
                            color="#767676"
                            lineHeight={1.5}
                            letterSpacing={1}
                          >{`• ${detail}`}</Typography>
                        ))}
                      </Stack>
                    </Stack>
                    <Stack borderBottom="1px solid #D3d3d3" width="100%" />
                  </React.Fragment>
                ))}
              </Stack>
            </Stack>
          </Stack>
          <Stack
            padding={2}
            flexDirection={isMdDown ? "column" : "row"}
            gap={isMdDown ? 2 : 4}
            alignSelf={"flex-start"}
            width={"100%"}
            height={"auto"}
          >
            <Stack width={"100%"} height={"100%"} bgcolor={"#fff"} gap={4}>
              <Stack alignItems="flex-start" width="100%" height="100%" gap={2}>
                <Typography variant={isMdDown ? "h4" : "h2"} fontWeight={700}>
                  {"EDUCATION"}
                </Typography>
                <Stack borderBottom="1px solid #D3d3d3" width="100%" />
                <Stack
                  gap={isMdDown ? 2 : 6}
                  width="100%"
                  flexDirection={isMdDown ? "column" : "row"}
                >
                  <Stack width={isMdDown ? "100%" : "40%"}>
                    <Typography variant="h6">
                      {"𝑪𝒉𝒊𝒕𝒌𝒂𝒓𝒂 𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚, 𝑷𝒖𝒏𝒋𝒂𝒃"}
                    </Typography>
                    <Typography variant="body1">{"2020-2024"}</Typography>
                  </Stack>
                  <Stack
                    alignItems="flex-start"
                    width={isMdDown ? "100%" : "60%"}
                    gap={1}
                  >
                    <Typography
                      variant={isMdDown ? "body1" : "body1"}
                      color="#666666"
                      lineHeight={1.5}
                      letterSpacing={1}
                    >
                      {"Bachelor of Technology (B.E)"} {"(Computer Science)"}
                    </Typography>
                    <Typography
                      variant={isMdDown ? "subtitle2" : "body2"}
                      color="#767676"
                      lineHeight={1.5}
                      letterSpacing={1}
                    >
                      {"9.65 CGPA"}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack borderBottom="1px solid #D3d3d3" width="100%" />
              </Stack>
            </Stack>
            <Stack height={"auto"} width={"100%"} gap={isMdDown ? 2 : 4}>
              <Stack alignItems="flex-start" width="100%" height="100%" gap={2}>
                <Typography variant={isMdDown ? "h4" : "h2"} fontWeight={700}>
                  {"HACKATHONS"}
                </Typography>
                <Stack borderBottom="1px solid #D3d3d3" width="100%" />
                {hackathonInfo.map((job, index) => (
                  <React.Fragment key={index}>
                    <Stack
                      gap={isMdDown ? 2 : 6}
                      width="100%"
                      flexDirection={isMdDown ? "column" : "row"}
                    >
                      <Stack width={isMdDown ? "100%" : "30%"}>
                        <Typography variant="h6">{job.company}</Typography>
                        <Typography variant="body1">{job.date}</Typography>
                      </Stack>
                      <Stack
                        alignItems="flex-start"
                        width={isMdDown ? "100%" : "70%"}
                        gap={1}
                      >
                        <Typography
                          variant={isMdDown ? "body1" : "body1"}
                          color="#666666"
                          lineHeight={1.5}
                          letterSpacing={1}
                        >
                          {job.role}
                        </Typography>
                        {job.details.map((detail, i) => (
                          <Typography
                            key={i}
                            variant={isMdDown ? "subtitle2" : "body2"}
                            color="#767676"
                            lineHeight={1.5}
                            letterSpacing={1}
                          >{`• ${detail}`}</Typography>
                        ))}
                      </Stack>
                    </Stack>
                    <Stack borderBottom="1px solid #D3d3d3" width="100%" />
                  </React.Fragment>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ExperienceComponent;
