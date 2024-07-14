import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link, SvgIcon, useMediaQuery } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import useStyles from "./home-styles";
import LinkedInImage from "../../assets/linkedin.svg";
import GithubImage from "../../assets/github.svg";
import LeetcodeImage from "../../assets/leetcode.svg";
import Tooltip from "@mui/material/Tooltip";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { styled } from "@mui/system";
import NavbarComponent from "../navbar/navbar";
import Box from "@mui/material/Box";

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  letterSpacing: "5px",
  color: "#fffafa",
  borderRadius: "10px",
}));

const HomeComponent = () => {
  const classes = useStyles();
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

  return (
    <Stack className={classes.wrapper} id="home" overflowY={'hidden'} >
      <NavbarComponent />

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
          color={'#fff'}
          letterSpacing={1}
        >
         {'Web development • Front-End development • Full-Stack development •  Technical Content Writing  •   Blogging  •  Web development • Front-End development • Full-Stack development •  Technical Content Writing  •   Blogging'}
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
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
      >
        <Typography color={"#fff"} variant="body1" fontWeight={500}>
          {"sharmaaditya13064@gmail.com"}
        </Typography>
        <Typography color={"#fff"} variant="body1" fontWeight={500}>
          {"(+91)9034349633"}
        </Typography>
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
    </Stack>
  );
};

export default HomeComponent;
