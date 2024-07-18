import * as React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import { Typography, Stack, Link } from "@mui/material";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import "./styles.css";
import LinkedInImage from "../../../assets/icons8-linkedin-30.png";
import GithubImage from "../../../assets/icons8-github-30.png";
import LeetcodeImage from "../../../assets/icons8-level-up-your-coding-skills-and-quickly-land-a-job-24.png";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 60px) 45px)`,
    transition: { type: "spring", stiffness: 20, restDelta: 2 },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 60px) 45px)",
    transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 },
  },
};

const aboutMeVariants = {
  hidden: { y: "1000%", opacity: 0 },
  visible: {
    y: "calc(180% - 100px)",
    x: 10,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleNavigation = (path) => {
    toggleOpen();
    setTimeout(() => navigate(path), 500);
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
          <Stack gap={1}>
            <Typography variant="body1" fontWeight={700} color="#000">
              {"𝑆𝑖𝑡𝑒𝑚𝑎𝑝:"}
            </Typography>
            {["ABOUT ME", "SKILLS",'ARTICLES' ,"PROJECTS"].map((text, index) => (
              <Typography
                key={index}
                variant="h3"
                fontWeight={600}
                color="#000"
                onClick={() =>
                  handleNavigation(`/${text.toLowerCase().replace(" ", "-")}`)
                }
              >
                {text}
              </Typography>
            ))}
          </Stack>
          <Stack
            position="absolute"
            bottom={-80}
            flexDirection="row"
            alignSelf="center"
            gap={6}
            width="100%"
            left={24}
          >
            {[
              {
                href: "https://www.linkedin.com/in/adityasharma13064",
                src: LinkedInImage,
              },
              { href: "https://github.com/AdityaSharma224", src: GithubImage },
              {
                href: "https://leetcode.com/u/sharmaaditya224",
                src: LeetcodeImage,
              },
            ].map((link, index) => (
              <Link key={index} href={link.href} target="_blank">
                <Stack flexDirection={"row"} gap={9}>
                  <Stack
                    component="img"
                    src={link.src}
                    sx={{ height: "25px", width: "25px" }}
                  />
                  {index < 2 && (
                    <Typography variant="body2" color="#000">
                      |
                    </Typography>
                  )}
                </Stack>
              </Link>
            ))}
          </Stack>
        </motion.div>
      </motion.div>
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
