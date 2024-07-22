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
      <motion.div className="background" variants={sidebar} style={{alignSelf:'end'}}>
        <Stack height={'100%'} gap={6} padding={2} justifyContent={'flex-end'} alignItems={'flex-start'}>
          <Stack gap={1}>
            <Typography variant="body1" fontWeight={700} color="#000">
              {"𝑆𝑖𝑡𝑒𝑚𝑎𝑝:"}
            </Typography>
            {["ABOUT ME", "SKILLS", "ARTICLES", "PROJECTS"].map(
              (text, index) => (
                <Typography
                  key={index}
                  variant="h4"
                  fontWeight={600}
                  color="#000"
                  onClick={() =>
                    handleNavigation(`/${text.toLowerCase().replace(" ", "-")}`)
                  }
                >
                  {text}
                </Typography>
              )
            )}
          </Stack>
          <Stack
            flexDirection="row"
            alignSelf="center"
            gap={8}
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
        </Stack>
      </motion.div>
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
