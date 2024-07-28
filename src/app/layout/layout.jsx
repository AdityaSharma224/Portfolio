import React from "react";
import Stack from "@mui/material/Stack";
import HomeComponent from "../home/home-component";
import Preloader from "../preloader/loader";
import useStyles from "./layout-styles";
import AboutComponent from "../experience/aboutMe";
import FooterComponent from "../components/footer";

const Layout = () => {
  const classes = useStyles();

  return (
    <Stack className={classes.wrapper}>
      <Preloader />
        <HomeComponent />
      <AboutComponent />
      <FooterComponent />
    </Stack>
  );
};

export default Layout;
