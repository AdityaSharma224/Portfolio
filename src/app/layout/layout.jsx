import React from "react";
import Stack from "@mui/material/Stack";
import HomeComponent from "../home/home-component";
import ExperienceComponent from "../experience/experience-component";
import Preloader from "../preloader/loader";
import useStyles from "./layout-styles";

const Layout = () => {
  const classes = useStyles();
  return (
    <Stack className={classes.wrapper}>
      <Preloader />
      <HomeComponent />
      <ExperienceComponent/>
    </Stack>
  );
};

export default Layout;
