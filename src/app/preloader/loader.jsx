import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import { gsap } from "gsap";
import Sound from "react-sound";
import { Box, Typography, keyframes, Stack } from "@mui/material";
import IntroMp3 from "../../assets/introSound.mp3";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

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
  fontSize: "60px",
  fontWeight: 700,
  letterSpacing: "6px",
  marginBottom: "20px",
  position: "relative",
  backgroundColor: "#1A1A1A",
  animation: `${textAnimation} 3s`,
});

const Text2 = styled(Typography)({
  fontSize: "25px",
  color: "#FFE997",
});

const Preloader = () => {
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
  const [isPlaying, setIsPlaying] = useState(false);
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
        duration: 3,
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

  const togglePlayStatus = () => {
    if (isPlaying) {
      setPlayStatus(Sound.status.STOPPED);
    } else {
      setPlayStatus(Sound.status.PLAYING);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <PreloaderContainer className="preloader">
      {showText && (
        <Container>
          <Text1>{"Aditya's"}</Text1>
          <Text2>{"Portfolio"}</Text2>
        </Container>
      )}
      <Sound
        url={IntroMp3}
        playStatus={playStatus}
        onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)}
      />
      {!animationEnded && showText && (
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          sx={{ position: "absolute", bottom: 10, left: 10 }}
          gap={1}
        >
          <IconButton onClick={togglePlayStatus} color="inherit">
            {isPlaying ? (
              <VolumeUpIcon
                htmlColor="#fff"
                sx={{ height: "30px", width: "30px" }}
              />
            ) : (
              <VolumeOffIcon
                htmlColor="#fff"
                sx={{ height: "30px", width: "30px" }}
              />
            )}
          </IconButton>
          <Typography variant="body1" color={"#fff"}>
            {"Sound"}:{isPlaying ? "On" : "Off"}
          </Typography>
        </Stack>
      )}
    </PreloaderContainer>
  );
};

export default Preloader;
