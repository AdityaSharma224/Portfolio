import React, { useState, useEffect } from "react";
import useStyles from "./navbar-styles";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Lenis from "@studio-freight/lenis";
import { Button, Typography } from "@mui/material";
import { Link } from "react-scroll";
import { Example } from "./shortMenu/Example";

const NavbarComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 4.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Stack
      className={classes.wrapper}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <Stack className={classes.innerWrapper1} flexDirection={"row"}>
        <Stack className={classes.itemStack}>
          <Typography
            sx={{
              typography: { xs: "h5", sm: "h5", md: "h6", lg: "h5", xl: "h5" },
              fontWeight: { xs: 700, sm: 700, md: 700, lg: 700, xl: 700 },
            }}
            color={"#fff"}
          >
            {"ADITYA SHARMA"}
          </Typography>
          <Typography
            sx={{
              typography: { xs: "h5", sm: "h5c", md: "h6", lg: "h5", xl: "h5" },
              fontWeight: { xs: 700, sm: 700, md: 700, lg: 700, xl: 700 },
            }}
            color={"#fff"}
          >
            {"PORTFOLIO"}
          </Typography>
        </Stack>
        <Stack
          className={classes.itemStack}
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
          <Typography
            sx={{
              typography: { xs: "h6", sm: "h6", md: "h6", lg: "h6", xl: "h6" },
            }}
            letterSpacing={-0.3}
            fontWeight={500}
            color={"#fff"}
          >
            {"𝑆𝑖𝑡𝑒𝑚𝑎𝑝:"}
          </Typography>
          <Stack flexDirection={"row"} gap={1}>
            <Typography
              variant="body1"
              fontWeight={500}
              color={"#fff"}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/about-me")}
            >
              {"About me,"}
            </Typography>
            <Typography
              variant="body1"
              fontWeight={500}
              color={"#fff"}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/skills")}
            >
              {"Skills,"}
            </Typography>
            <Typography
              variant="body1"
              fontWeight={500}
              color={"#fff"}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/projects")}
            >
              {"Projects"}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: {
              xs: "flex",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <Example />
        </Stack>
      </Stack>
      <Stack
        flexDirection={"row"}
        className={classes.innerWrapper2}
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
        <Stack className={classes.itemStack}>
          <Typography
            sx={{
              typography: { xs: "h7", sm: "h7", md: "h6", lg: "h6", xl: "h6" },
            }}
            letterSpacing={-0.3}
            fontWeight={500}
            color={"#fff"}
          >
            {"𝑆𝑡𝑎𝑡𝑢𝑠:"}
          </Typography>
          <Typography variant="body1" fontWeight={500} color={"#fff"}>
            {"Software Development Engineer - 1"}
          </Typography>
        </Stack>
        <Stack className={classes.itemStack}>
          <Typography
            sx={{
              typography: { xs: "h7", sm: "h7", md: "h6", lg: "h6", xl: "h6" },
            }}
            letterSpacing={-0.3}
            fontWeight={500}
            color={"#fff"}
          >
            {"𝐿𝑜𝑐𝑎𝑡𝑖𝑜𝑛:"}
          </Typography>
          <Typography variant="body1" fontWeight={500} color={"#fff"}>
            {"Cast Software, Bengaluru, India"}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NavbarComponent;
