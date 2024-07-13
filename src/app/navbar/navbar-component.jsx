import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import useStyles from "./navbar-styles";
import Stack from "@mui/material/Stack";
import MenuImg from "../../assets/menu.png";
import { Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Lenis from "@studio-freight/lenis";

const NavbarComponent = () => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleExpansion = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

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

    let timeout;
    const handleScroll = () => {
      setIsVisible(false);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <Stack className={classes.wrapper} top={isVisible ? "0" : "-100px"}>
      <Stack
        className={classes.itemWrapper}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <span>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={classes.item}
          >
            Home
          </Link>
        </span>
        <span>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className={classes.item}
          >
            Experience
          </Link>
        </span>
        <span>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className={classes.item}
          >
            Skills
          </Link>
        </span>
        <span>
          <Link
            activeClass="active"
            to="articles"
            spy={true}
            smooth={true}
            duration={500}
            className={classes.item}
          >
            Articles
          </Link>
        </span>
        <span>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={classes.item}
          >
            Projects
          </Link>
        </span>
      </Stack>
      <Stack
        className={classes.menu}
        flexDirection={"row"}
        onClick={toggleExpansion}
      >
        <img
          src={MenuImg}
          height={"30px"}
          width={"30px"}
          className={classes.img}
          alt="menuIcon"
        ></img>
        <Stack color={"#fff"} alignItems={"center"}>
          {open ? (
            <ExpandMoreIcon
              fontSize="large"
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            />
          ) : (
            <NavigateNextIcon
              fontSize="large"
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            />
          )}
        </Stack>
      </Stack>
      {open && (
        <Stack
          className={classes.downMenu}
          sx={{ display: { lg: "none", xl: "none" } }}
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={classes.menuItem}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className={classes.menuItem}
            onClick={closeMenu}
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className={classes.menuItem}
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="articles"
            spy={true}
            smooth={true}
            duration={500}
            className={classes.menuItem}
            onClick={closeMenu}
          >
            Articles
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={classes.menuItem}
            onClick={closeMenu}
          >
            Projects
          </Link>
        </Stack>
      )}
    </Stack>
  );
};

export default NavbarComponent;
