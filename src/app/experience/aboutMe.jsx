import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import useStyles from "./experience-styles";
import { Box, Typography, keyframes } from "@mui/material";
import { styled } from "@mui/system";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Divider } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import PeopleCards from "../components/people-card";
import { useTheme, useMediaQuery } from "@mui/material";
import FooterComponent from "../components/footer";

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
  fontSize: "80px",
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
  gsap.registerPlugin(ScrollTrigger);

  const peopleInfo = [
    {
      name: "Rishabh Prabhu Srivastava",
      role: "Technical Manager, GeeksforGeeks",
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQEFVlIIVSCq3g/profile-displayphoto-shrink_800_800/0/1721276718922?e=1727308800&v=beta&t=BjuKjccdsa9FZFA3oVvfT7dYU8qFqhy9KtYTwnGXvvw",
      testimonial:
        "I had the pleasure of managing Aditya during his internship at GeeksforGeeks. Throughout his time with us, Aditya demonstrated a remarkable aptitude for DSA and a strong work ethic. He collaborated effectively with team members, always ready to share knowledge and assist others. I highly recommend Aditya.",
    },
    {
      name: "Mayur Rokade",
      role: "Product Manager, Contlo",
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQGA2Er2TIRa2g/profile-displayphoto-shrink_800_800/0/1680192282901?e=1727308800&v=beta&t=AyZkina02MFfEHA0M1M8TJ-hkoICOcezRRnkPTLobes",
      testimonial:
        "I'm thrilled to recommend Aditya, a talented and results-oriented engineer while working at SuperAGI. During his time on the team, Aditya consistently impressed me with his ability to develop innovative solutions. Aditya's technical skills are top-notch, and he's also a highly motivated team player. As his Product Manager, I have no doubt he'll continue to excel in his career.",
    },
    {
      name: "Manuj Grover",
      role: "Software Engineer, Zomato",
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQGFAGEj_ZYeZA/profile-displayphoto-shrink_200_200/0/1703826542916?e=1727308800&v=beta&t=xqK8UEmNPBbsWw4sEVtZFdF4-YYk8hSHaD23D9dNQa8",
      testimonial:
        "Aditya's motivation and enthusiasm is truly exceptional. His positive attitude and strong work ethic consistently elevated the team's performance. His knack for bringing fresh ideas to the table and adept problem-solving make him an exceptional candidate for software development roles.",
    },
    {
      name: "Animesh Dey",
      role: "Ex- Senior MTS, GeeksforGeeks",
      imageUrl:
        "https://media.licdn.com/dms/image/D4D03AQHW-m2mS4-Eew/profile-displayphoto-shrink_200_200/0/1694715948546?e=1727308800&v=beta&t=7lnJtlwjFpU-X7cef6PyVaYTyYOkL-65ERwz7x8OcKA",
      testimonial:
        "Aditya is a very passionate and hard working individual. His enthusiasm and perseverance towards learning new concepts amazed me. I am sure his dedicated nature will help him grow and inspire others at the same time.",
    },
  ];

  useEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".side-card",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });

    t1.fromTo(
      ".side-card",
      { x: -800, y: 0, opacity: 0.1 },
      { x: 0, y: 0, opacity: 1 }
    );
  }, []);

  useEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".animatedText3",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });

    t1.fromTo(
      ".animatedText3",
      { x: -60, y: 0, opacity: 0.2 },
      { x: 0, y: 0, opacity: 1 }
    );
  }, []);

  useEffect(() => {
    const splitTypes = document.querySelectorAll(".animatedText");
    splitTypes.forEach((char) => {
      const text = new SplitType(char, { types: "chars" });
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
    const splitTypes2 = document.querySelectorAll(".animatedText2");
    splitTypes2.forEach((char) => {
      const text2 = new SplitType(char, { types: "chars" });
      gsap.from(text2.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        y: 80,
        opacity: 0,
        stagger: 0.1,
      });
    });
  }, []);

  return (
    <Stack
      className={classes.wrapper2}
      sx={{
        gap: { xs: 6, sm: 6, md: 10, lg: 14, xl: 14 },
        paddingX: { xs: 2, sm: 2, md: 0, lg: 0, xl: 0 },
      }}
      id="experience"
      paddingY={6}
      marginTop={2}
    >
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
          className="animatedText"
          sx={{
            fontSize: {
              xs: "18px",
              sm: "18px",
              md: "30px",
              lg: "40px",
              xl: "40px",
            },
          }}
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
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
          gap={4}
          width={"100%"}
          alignItems={"center"}
          marginTop={5}
        >
          <Typography
            className="animatedText2"
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "52%",
                lg: "52%",
                xl: "52%",
              },
              typography: {
                xs: "h5",
                sm: "h6",
                md: "h4",
                lg: "h3",
                xl: "h3",
              },
              fontWeight: {
                xs: 700,
                sm: 700,
                md: 700,
                lg: 700,
                xl: 700,
              },
            }}
          >
            {"SOME OF THE MOST VIEWED"} {"TUTORIALS AND ARTICLES"}{" "}
            {"ON DATA STRUCTURES AND ALGORITHMS"}
          </Typography>
          <Stack gap={1} alignItems={"flex-start"} className={"animatedText3"}>
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
                onClick={() => navigate("/articles")}
              >
                <ArrowOutwardIcon fontSize="medium" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        borderBottom={"1px solid #D3d3d3"}
        alignSelf={"center"}
        width={"95%"}
      />
      <Box className={classes.recommendationWrapper} gap={4}>
        {peopleInfo.map((person, index) => (
          <PeopleCards
            key={index}
            name={person.name}
            role={person.role}
            imageUrl={person.imageUrl}
            testimonial={person.testimonial}
            className={"side-card"}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default AboutComponent;
