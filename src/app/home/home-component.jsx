import React, { useState, useEffect,useRef } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link, SvgIcon, useMediaQuery } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import useStyles from "./home-styles";
import LinkedInImage from "../../assets/linkedin.svg";
import GithubImage from "../../assets/github.svg";
import LeetcodeImage from "../../assets/leetcode.svg";
import EmailImg from "../../assets/mail-24.ico";
import Tooltip from "@mui/material/Tooltip";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { styled } from "@mui/system";
import NavbarComponent from "../navbar/navbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import phoneImg from "../../assets/phone-68-24.ico";

const Letter = styled('span')({
  willChange: 'transform',
  cursor: 'default',
  display: 'inline-block',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scaleX(0.8) scaleY(1.2)',
  },
});

const HomeComponent = () => {
  const classes = useStyles();
  const cursorRef = useRef(null);
  const homeRef = useRef(null);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [hover, setHover] = useState(false);

  const renderIcon = (tooltip, href, src, Component) => {
    const icon = (
      <Link href={href} target="_blank">
        {Component ? (
          <SvgIcon
            className={classes.icon}
            sx={{ height: "25px", width: "25px", marginTop: "10px" }}
          >
            <Component htmlColor="#fff" />
          </SvgIcon>
        ) : (
          <Stack component={"img"} src={src} className={classes.icon} />
        )}
      </Link>
    );

    return isMdUp ? (
      <Tooltip title={tooltip} placement="right-start" arrow>
        {icon}
      </Tooltip>
    ) : (
      icon
    );
  };

  useEffect(() => {
    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      const cursorWidth = cursorRef.current.offsetWidth / 2;
      const cursorHeight = cursorRef.current.offsetHeight / 2;

      if (homeRef.current) {
        const { left, top, right, bottom } = homeRef.current.getBoundingClientRect();
        if (x >= left && x <= right && y >= top && y <= bottom) {
          cursorRef.current.style.left = `${x - cursorWidth}px`;
          cursorRef.current.style.top = `${y - cursorHeight}px`;
          cursorRef.current.style.display = "block";
        } else {
          cursorRef.current.style.display = "none";
        }
      }
    };

    window.addEventListener("mousemove", editCursor);

    return () => {
      window.removeEventListener("mousemove", editCursor);
    };
  }, []);


  return (
    <Stack className={classes.wrapper} id="home" overflowY={"hidden"} ref={homeRef}>
      <NavbarComponent />
      <Stack flexDirection={'column'} gap={1} position={'absolute'} sx={{bottom:{xs:120,sm:120,md:50,lg:50,xl:50}, left:{xs:30,sm:30,md:50,lg:50,xl:50}}}>
      <Typography variant="h1" sx={{ fontSize: { xs: '50px', sm: '80px', md: '100px', lg: '150px', xl: '150px' }, fontWeight: 700, color: '#fff' }}>
        {'WEB'.split('').map((char, index) => (
          <Letter key={index}>{char}</Letter>
        ))}
      </Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: '50px', sm: '80px', md: '100px', lg: '150px', xl: '150px' }, fontWeight: 700, color: '#fff' }}>
        {'DEVELOPER'.split('').map((char, index) => (
          <Letter key={index}>{char}</Letter>
        ))}
      </Typography>
      </Stack>
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        overflow="hidden"
        width="100%"
        position="absolute"
        bottom={0}
      >
        <Typography
          className={classes.scrollingText}
          style={{ animationPlayState: hover ? "paused" : "running" }}
          color={"#fff"}
          letterSpacing={1}
          paddingY={1}
        >
          {
            "Web development • Front-End development • Full-Stack development •  Technical Content Writing  •   Blogging  •  Web development • Front-End development • Full-Stack development •  Technical Content Writing  •   Blogging"
          }
        </Typography>
      </Box>
      {/* contact Info */}
      <Stack
        gap={1}
        position={"absolute"}
        paddingX={4}
        paddingY={6}
        bottom={10}
        right={10}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
      >
        <Stack flexDirection={"row"} gap={0} alignItems={"center"}>
          <Stack
            component={"img"}
            src={EmailImg}
            height={"20px"}
            width={"20px"}
          ></Stack>
          <Button
            variant="text"
            href={`mailto:sharmaaditya13064@gmail.com`}
            sx={{
              textDecoration: "none",
              color: "#fff",
              textTransform: "none",
            }}
          >
            <Typography color={"#fff"} variant="body1" fontWeight={500} href={`mailto:sharmaaditya13064@gmail.com`}>
              {"sharmaaditya13064@gmail.com"}
            </Typography>
          </Button>
        </Stack>
        <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
          <Stack
            component={"img"}
            src={phoneImg}
            height={"20px"}
            width={"20px"}
          ></Stack>
          <Typography color={"#fff"} variant="body1" fontWeight={500} sx={{userSelect:'text'}}>
            {"(+91) 9034349633"}
          </Typography>
        </Stack>
        <Stack className={classes.detailsWrapper}>
          <Stack className={classes.socialIcons} flexDirection={"row"}>
            {renderIcon(
              "LinkedIn",
              "https://www.linkedin.com/in/adityasharma13064",
              LinkedInImage
            )}
            {renderIcon(
              "Github",
              "https://github.com/AdityaSharma224",
              GithubImage
            )}
            {renderIcon(
              "LeetCode (Top 6% worldwide)",
              "https://leetcode.com/u/sharmaaditya224",
              LeetcodeImage
            )}
            {renderIcon(
              "Resume",
              "https://media.licdn.com/dms/document/media/D562DAQGOSDcDWEMqiA/profile-treasury-document-pdf-analyzed/0/1719126559318?e=1720656000&v=beta&t=Cz8QweGPgAWvy1PGFnI7KwIaFUr3iefqGVxnN4-7SiM",
              null,
              AccountBoxIcon
            )}
          </Stack>
        </Stack>
      </Stack>
      <div
        className={classes.cursor}
        ref={cursorRef}
      />
    </Stack>
  );
};

export default HomeComponent;
