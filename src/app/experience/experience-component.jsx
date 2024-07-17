import React, { useState, useRef, useEffect } from "react";
import Stack from "@mui/material/Stack";
import useStyles from "./experience-styles";
import MyAboutImage from "../../assets/about-image.jpg";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import GFGIcon from "../../assets/gfg.png";
import CASTIcon from "../../assets/cast.png";
import CONTLOIcon from "../../assets/contlo.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { CardActionArea } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ScrollingText from "./dynamic-scroll-text";

const ExperienceComponent = () => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiences = [
    {
      icon: CASTIcon,
      year: "10/2023 - Present",
      title: "Software Development Engineer - 1",
      description: (
        <List
          sx={{
            listStyleType: "disc",
            pl: 2,
            "& .MuiListItem-root": { display: "list-item" },
          }}
        >
          <ListItem>
            {
              "Frontend development of the CAST Imaging Analyzer, Utilizing the Wails framework with React.js for an intuitive user interface,catering to diverse operational environments."
            }
          </ListItem>
          <ListItem>
            {
              "Online Mode: Implemented a lightweight CAST analyzer that performs rapid scans of applications, identifies underlying technologies, and seamlessly integrates with CAST Imaging SaaS for automatic result uploads, enhancing efficiency and security."
            }
          </ListItem>
          <ListItem>
            {
              "Offline Mode: Established a robust local setup designed for comprehensive scans without internet dependency, optimizing for storage efficiency. Facilitated post-scan reviews, enabling precise manual uploads to CAST Imaging SaaS, ensuring data integrity and control."
            }
          </ListItem>
        </List>
      ),
    },
    {
      icon: CONTLOIcon,
      year: "07/2023 - 10/2023",
      title: "Software Development Engineer Intern",
      description: (
        <List
          sx={{
            listStyleType: "disc",
            pl: 2,
            "& .MuiListItem-root": { display: "list-item" },
          }}
        >
          <ListItem>
            {
              "Development of long-term memory capabilities for large language models, enhancing response relevance and accuracy by 65%."
            }
          </ListItem>
          <ListItem>
            {"Databases Integration (Redis, Pinecone) for vector storage."}
          </ListItem>
          <ListItem>
            {
              "Implemented innovative AI algorithms that improved overall system efficiency, resulting in a 30% reduction in response."
            }
          </ListItem>
        </List>
      ),
    },
    {
      icon: GFGIcon,
      year: "10/2022 - 06/2023",
      title: "Member of Technical Staff Intern",
      description: (
        <List
          sx={{
            listStyleType: "disc",
            pl: 2,
            "& .MuiListItem-root": { display: "list-item" },
          }}
        >
          <ListItem>
            {
              "Worked closely with the Core Data Structure and Algorithm team at GeeksforGeeks."
            }
          </ListItem>
          <ListItem>
            {
              "Designed and developed the most viewed data structure and algorithm official tutorials e.g., Dijkstra's Algorithm, Set, Map, MaHeap, and Min-Heap."
            }
          </ListItem>
          <ListItem>
            {
              "Improved Customer/Viewer Experience by delivering top quality content and Visuals."
            }
          </ListItem>
        </List>
      ),
    },
  ];

  return (
    <Stack className={classes.wrapper} id="experience">
    </Stack>
  );
};

export default ExperienceComponent;
