import React, { useState } from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { gsap } from "gsap";
import Sound from "react-sound";
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
  backgroundColor: "#88513A",
  overflow: "hidden",
  zIndex: 100,
  borderBottom: "14px solid #3E261C",
}));

const TextContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "2em",
  overflow: "hidden",
  color: "white",
  opacity: 0,
});

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  // Default styles
  [theme.breakpoints.up("xs")]: {
    fontSize: "2.3rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "5rem",
  },
}));

const Preloader = () => {
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);

  React.useEffect(() => {
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
        duration: 2.8,
        delay: 0.3,
        y: 110,
        skewY: 0,
        stagger: 0.4,
        ease: "Power3.easeOut",
      })
      .to(".preloader .text-container h1", {
        duration: 2.1,
        y: 110,
        skewY: -10,
        stagger: 0.2,
        ease: "Power3.easeOut",
      })
      .to(".preloader", {
        duration: 2.1,
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
      <TextContainer className="text-container">
        <TypographyStyled variant="h1" color={'#EEC09B'}>Loading...</TypographyStyled>
        <TypographyStyled variant="h1" fontWeight={400}>
          🤗
        </TypographyStyled>
      </TextContainer>
      <Sound
        url={IntroMp3}
        playStatus={playStatus}
        onFinishedPlaying={() => setPlayStatus(Sound.status.STOPPED)}
      />
      {!animationEnded && (
        <IconButton
          onClick={togglePlayStatus}
          color="inherit"
          sx={{ position: "absolute", bottom: 10, left: 10 }}
        >
          {isPlaying ? (
            <VolumeUpIcon
              htmlColor="#EEC09B"
              sx={{ height: "50px", width: "50px" }}
            />
          ) : (
            <VolumeOffIcon
              htmlColor="#EEC09B"
              sx={{ height: "50px", width: "50px" }}
            />
          )}
        </IconButton>
      )}
    </PreloaderContainer>
  );
};

export default Preloader;
