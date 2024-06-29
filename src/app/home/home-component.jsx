import React from "react";
import Stack from "@mui/material/Stack";
import Myimage from "../../assets/myimg.jpg";
import Typography from "@mui/material/Typography";
import { Link, SvgIcon, useMediaQuery } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import useStyles from "./home-styles";
import LinkedInImage from "../../assets/linkedin.svg";
import GithubImage from "../../assets/github.svg";
import LeetcodeImage from "../../assets/leetcode.svg";
import Clouds from "../../assets/clouds.png";
import Tooltip from "@mui/material/Tooltip";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const HomeComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const renderIcon = (tooltip, href, src, Component) => {
    const icon = (
      <Link href={href} target="_blank">
        {Component ? (
          <SvgIcon className={classes.icon} sx={{ height: "40px", width: "40px", marginTop: "10px" }}>
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
    <Stack className={classes.wrapper} id="home">
      <Stack className={classes.innerWrapper} flexDirection={"row"}>
        <Stack
          component={"img"}
          src={Clouds}
          position={"absolute"}
          className={classes.leftCloud1}
        />
        <Stack
          component={"img"}
          src={Clouds}
          position={"absolute"}
          className={classes.leftCloud2}
        />
        <Stack
          component={"img"}
          src={Clouds}
          position={"absolute"}
          className={classes.cloudsRight}
        />
        <Stack className={classes.detailsWrapper}>
          <Stack className={classes.typoWrapper}>
            <Typography
              sx={{ typography: { xs: "h3", sm: "h4", md: "h2" } }}
              color={"#fff"}
            >
              {"Hello"}
            </Typography>
            <Typography
              sx={{
                typography: { xs: "h2", sm: "h2", md: "h1" },
                fontWeight: { xs: 700, sm: 700, md: 700, lg: 700, xl: 700 },
              }}
              color={"#fff"}
            >
              {"I'm Aditya"}
            </Typography>
            <Typography
              sx={{ typography: { xs: "h5", sm: "h5", md: "h4" } }}
              color={"#fff"}
            >
              {"Software Engineer"}
            </Typography>
          </Stack>
          <Stack className={classes.socialIcons} flexDirection={"row"}>
            {renderIcon("LinkedIn", "https://www.linkedin.com/in/adityasharma13064", LinkedInImage)}
            {renderIcon("Github", "https://github.com/AdityaSharma224", GithubImage)}
            {renderIcon("LeetCode (Top 6% worldwide)", "https://leetcode.com/u/sharmaaditya224", LeetcodeImage)}
            {renderIcon("Resume", "https://media.licdn.com/dms/document/media/D562DAQGOSDcDWEMqiA/profile-treasury-document-pdf-analyzed/0/1719126559318?e=1720656000&v=beta&t=Cz8QweGPgAWvy1PGFnI7KwIaFUr3iefqGVxnN4-7SiM", null, AccountBoxIcon)}
          </Stack>
        </Stack>
        <img className={classes.image} src={Myimage} alt="aditya"></img>
      </Stack>
    </Stack>
  );
};

export default HomeComponent;
