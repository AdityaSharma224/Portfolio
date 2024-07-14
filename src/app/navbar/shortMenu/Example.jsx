import * as React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import { Typography } from "@mui/material";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import "./styles.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 60px) 45px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 60px) 45px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const aboutMeVariants = {
  hidden: { y: "1000%", opacity: 0 },
  visible: {
    y: "calc(400% - 100px)",
    x: 10,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleNavigation = (path) => {
    toggleOpen(); // Close the sidebar
    setTimeout(() => {
      navigate(path); // Navigate to the path after the animation
    }, 500); // Adjust the delay to match the animation duration
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar}>
        <motion.div
          className="about-me"
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={aboutMeVariants}
        >
          <Typography
            variant="h3"
            fontWeight={600}
            color={"#000"}
            onClick={() => handleNavigation("/skills")}
          >
            {"ABOUT ME"}
          </Typography>
          <Typography
            variant="h3"
            fontWeight={600}
            color={"#000"}
            onClick={() => handleNavigation("/about-me")}
          >
            {"SKILLS"}
          </Typography>
          <Typography
            variant="h3"
            fontWeight={600}
            color={"#000"}
            onClick={() => handleNavigation("/projects")}
          >
            {"PROJECTS"}
          </Typography>
        </motion.div>
      </motion.div>
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
