import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { gsap } from "gsap";
import { Box, Typography, keyframes, Stack } from "@mui/material";
import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints:{
      values:{
          xs:500,
          sm:600,
          md:900,
          lg:1000,
          xl:1200,
          xxl:1400,
      }
  }
});


const PreloaderContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1A1A1A",
  overflow: "hidden",
  zIndex: 100,
}));

const textAnimation = keyframes`
  0% {
    color: black;
    margin-bottom: -40px;
  }
  30% {
    letter-spacing: 15px;
    margin-bottom: -40px;
  }
  85% {
    letter-spacing: 8px;
    margin-bottom: -40px;
  }
  100% {
    margin-bottom: 20px;
  }
`;

const Container = styled(Box)({
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
});

const Text1 = styled(Typography)({
  color: "white",
  fontSize: "75px",
  fontWeight: 700,
  letterSpacing: "4px",
  marginBottom: "10px",
  position: "relative",
  backgroundColor: "#1A1A1A",
  animation: `${textAnimation} 3s`,
  [theme.breakpoints.down('xs')]:{
    fontSize: "40px",
  }
});

const Text2 = styled(Typography)({
  fontSize: "35px",
  fontWeight: 600,
  color: "#FFE997",
  [theme.breakpoints.down('xs')]:{
    fontSize: "30px",
  }
});

const Preloader = () => {
  const [animationEnded, setAnimationEnded] = useState(false);

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setAnimationEnded(true),
    });

    tl.to("body", {
      overflow: "hidden",
    })
      .to(".preloader .text-container", {
        duration: 0,
        opacity: 1,
        ease: "Power3.easeOut",
      })
      .from(".preloader .text-container h1", {
        duration: 3.4,
        delay: 0,
        y: 110,
        skewY: 0,
        stagger: 0.4,
        ease: "Power3.easeOut",
      })
      .to(".preloader .text-container h1", {
        display: "none",
      })
      .to(".preloader", {
        duration: 1,
        height: "0vh",
        ease: "Power3.easeOut",
      })
      .to(
        "body",
        {
          overflow: "auto",
        },
        "-=2"
      )
      .to(".preloader", {
        display: "none",
      });
  }, []);

  return (
    <PreloaderContainer className="preloader">
      {showText && (
        <Container>
          <Text1>{"Aditya Sharma"}</Text1>
          <Text2>{"Portfolio"}</Text2>
        </Container>
      )}
    </PreloaderContainer>
  );
};

export default Preloader;
