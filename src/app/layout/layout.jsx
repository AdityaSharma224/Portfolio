import React, { useEffect, useState, useRef } from "react";
import Stack from "@mui/material/Stack";
import HomeComponent from "../home/home-component";
import Preloader from "../preloader/loader";
import useStyles from "./layout-styles";
import AboutComponent from "../experience/aboutMe";
import FooterComponent from "../components/footer";

const Layout = () => {
  const classes = useStyles();
  const cursorRef = useRef(null);

  useEffect(() => {
    const editCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        const cursorWidth = cursorRef.current.offsetWidth / 2;
        const cursorHeight = cursorRef.current.offsetHeight / 2;
        cursorRef.current.style.left = `${x - cursorWidth}px`;
        cursorRef.current.style.top = `${y - cursorHeight}px`;
      
    };
    window.addEventListener("mousemove", editCursor);

    return () => {
      window.removeEventListener("mousemove", editCursor);
    };
  }, []);

  return (
    <Stack className={classes.wrapper}>
      <Preloader />
      <HomeComponent />
      <AboutComponent/>
      <FooterComponent/>
      <div
        className={`${classes.cursor}`}
        ref={cursorRef}
      ></div>{" "}
    </Stack>
  );
};

export default Layout;
