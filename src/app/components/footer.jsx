import React, { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const FooterComponent = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".name",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });

    t1.fromTo(
      ".name",
      { x: 0, y: 0, opacity: 0.4 },
      { x: 0, y: -180, opacity: 0.4 }
    );
  }, []);
  return (
    <Stack
      width={"100vw"}
      bgcolor={"#000"}
      sx={{
        height: {
          xs: "180px",
          sm: "180px",
          md: "350px",
          lg: "450px",
          xl: "500px",
        },
      }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography
        textAlign={"center"}
        className={"name"}
        sx={{
          fontSize: {
            xs: "40px",
            sm: "40px",
            md: "100px",
            lg: "180px",
            xl: "200px",
          },
        }}
        fontWeight={700}
        color={"#fff"}
      >
        {"ADITYA SHARMA"}
      </Typography>
    </Stack>
  );
};

export default FooterComponent;
