import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import useStyles from "./experience-styles";
import MyAboutImage from "../../assets/about-image.jpg";
import { IconButton, Typography } from "@mui/material";
import GFGIcon from "../../assets/gfg.png";
import CASTIcon from "../../assets/cast.png";
import CONTLOIcon from "../../assets/contlo.png";
import {
  CAST_DESCRIPTION,
  CONTLO_DESCRIPTION,
  GFG_DESCRIPTION,
} from "../constants";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { CardActionArea } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const ExperienceComponent = () => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiences = [
    {
      icon: CASTIcon,
      year: "10/2023 - Present",
      title: "Software Development Engineer - 1",
      description: <List sx={{ listStyleType: 'disc', pl: 2, '& .MuiListItem-root': { display: 'list-item' } }}>
      <ListItem>{'Developed a delicate desktop application to facilitate comprehensive source code analysis, understanding and architectural insights.'}</ListItem>
      <ListItem>{'Frontend development of the CAST Imaging Analyzer, Utilizing the Wails framework with React.js for an intuitive user interface,catering to diverse operational environments.'}</ListItem>
      <ListItem>{'Developed a dual-mode functionality-'}</ListItem>
      <ListItem>{'Online Mode: Implemented a lightweight CAST analyzer that performs rapid scans of applications, identifies underlying technologies,
and seamlessly integrates with CAST Imaging SaaS for automatic result uploads, enhancing efficiency and security.'}</ListItem>
      <ListItem>{'Offline Mode: Established a robust local setup designed for comprehensive scans without internet dependency, optimizing for storage
efficiency. Facilitated post-scan reviews, enabling precise manual uploads to CAST Imaging SaaS, ensuring data integrity and control.'}</ListItem>
        <ListItem>{'Engineered an intuitive interface for efficient navigation, and initiation of the scanning process, ensuring a user-friendly experience'}</ListItem>
    </List>,
    },
    {
      icon: CONTLOIcon,
      year: "07/2023 - 10/2023",
      title: "Software Development Engineer Intern",
     description: <List sx={{ listStyleType: 'disc', pl: 2, '& .MuiListItem-root': { display: 'list-item' } }}>
      <ListItem>{'Development of long-term memory capabilities for large language models, enhancing response relevance and accuracy by 65%.'}</ListItem>
      <ListItem>{'Databases Integration (Redis, Pinecone) for vector storage.'}</ListItem>
      <ListItem>{'Implemented innovative AI algorithms that improved overall system efficiency, resulting in a 30% reduction in response.'}</ListItem>
    </List>,
    },
    {
      icon: GFGIcon,
      year: "10/2022 - 06/2023",
      title: "Member of Technical Staff Intern",
      description: <List sx={{ listStyleType: 'disc', pl: 2, '& .MuiListItem-root': { display: 'list-item' } }}>
      <ListItem>{'Worked closely with the Core Data Structure and Algorithm team at GeeksforGeeks.'}</ListItem>
      <ListItem>{'Designed and developed the most viewed data structure and algorithm official tutorials e.g., Dijkstra's Algorithm, Set, Map, MaxHeap, and Min-Heap.'}</ListItem>
      <ListItem>{'Improved Customer/Viewer Experience by delivering top quality content and Visuals.'}</ListItem>
    </List>,
    },
  ];

  const goToPrevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length
    );
  };

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  return (
    <Stack className={classes.wrapper} id="experience">
      <Stack flexDirection={"row"} width="100%" height="100%">
        <img
          className={classes.myImage}
          src={MyAboutImage}
          width={"40%"}
          height={"100%"}
          alt="myimage"
        />
        <Stack className={classes.aboutWrapper}>
          <Stack className={classes.experienceWrapper}>
            <Typography
              variant="h1"
              color="#fff"
              fontWeight={700}
              sx={{
                typography: {
                  xs: "h3",
                  sm: "h3",
                  md: "h3",
                  lg: "h2",
                  xl: "h1",
                },
                fontWeight: { xs: 700, sm: 700, md: 700, lg: 700, xl: 700 },
              }}
            >
              Experience
            </Typography>
            <Stack
              sx={{ height: "100%", width: "100%", alignItems: "center" }}
              flexDirection={"row"}
              gap={2}
              borderRadius={"20px"}
            >
              <IconButton onClick={goToPrevCard}>
                <KeyboardDoubleArrowLeftIcon
                  htmlColor="#fff"
                  className={classes.icon}
                  sx={{height:60,width:60}}
                />
              </IconButton>
              {experiences.map(
                (experience, index) =>
                  index === currentIndex && (
                    <Card
                      key={index}
                      className={classes.cardWrapper}
                    >
                      <CardActionArea sx={{ borderRadius: "20px" }}>
                        <Stack
                          padding={2}
                          flexDirection={"row"}
                          alignItems={"flex-end"}
                          justifyContent={"space-between"}
                          sx={{ borderRadius: "20px" }}
                        >
                          <img
                            src={experience.icon}
                            height={"80px"}
                            width={"280px"}
                            alt={experience.title}
                          />
                          <Typography variant="h6">{experience.year}</Typography>
                        </Stack>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {experience.title}
                          </Typography>
                          <Typography variant="body1" color="text">
                            {experience.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  )
              )}
              <IconButton onClick={goToNextCard}>
                <KeyboardDoubleArrowRightIcon
                  htmlColor="#fff"
                  className={classes.icon}
                  sx={{height:60,width:60}}
                />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ExperienceComponent;
