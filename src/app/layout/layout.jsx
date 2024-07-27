import React, { useEffect, useRef } from "react";
import Stack from "@mui/material/Stack";
import HomeComponent from "../home/home-component";
import Preloader from "../preloader/loader";
import useStyles from "./layout-styles";
import AboutComponent from "../experience/aboutMe";
import FooterComponent from "../components/footer";

const Layout = () => {
  const classes = useStyles();
  const homeRef = useRef(null);

  return (
    <Stack className={classes.wrapper}>
      <Preloader />
      <div ref={homeRef}>
        <HomeComponent />
      </div>
      <AboutComponent />
      <FooterComponent />
    </Stack>
  );
};

export default Layout;
