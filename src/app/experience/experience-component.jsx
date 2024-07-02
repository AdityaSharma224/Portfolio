import React, { useState, useRef } from "react";
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
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const AnimatedTypography = styled(Typography)({
  color: "#dbd56e",
  background: "linear-gradient(25deg, #eee, #333)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 500,
  overflow: "hidden",
  alignItems: "center",
  whiteSpace: "nowrap",
  borderRight: "2px solid",
  marginTop: "0.4em",

  animation:
    "type 1.5s steps(90) 1.5s 1 normal both, cursor 1s step-end infinite",
  position: "relative",
  "@keyframes type": {
    from: { width: 0 },
    to: { width: "75%" },
  },
  "@keyframes cursor": {
    "100%": { borderColor: "transparent" },
  },
});
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
            <Stack
              sx={{ height: "100%", width: "100%", alignItems: "center" }}
              flexDirection={"row"}
              borderRadius={"30px"}
            >
              <IconButton onClick={goToPrevCard}>
                <KeyboardDoubleArrowLeftIcon
                  htmlColor="#fff"
                  className={classes.icon}
                  sx={{
                    height: { xs: 30, sm: 30, md: 40, lg: 60, xl: 60 },
                    width: { xs: 30, sm: 30, md: 40, lg: 60, xl: 60 },
                  }}
                />
              </IconButton>
              {experiences.map(
                (experience, index) =>
                  index === currentIndex && (
                    <Card key={index} className={classes.cardWrapper}>
                      <CardActionArea sx={{ borderRadius: "30px" }}>
                        <Stack
                          padding={2}
                          flexDirection={"row"}
                          alignItems={"flex-end"}
                          justifyContent={"space-between"}
                          sx={{ borderRadius: "30px" }}
                        >
                          <img
                            src={experience.icon}
                            className={classes.companyIcon}
                            alt={experience.title}
                          />
                          <Typography
                            sx={{
                              typography: {
                                xs: "caption",
                                sm: "body2",
                                md: "h7",
                                lg: "h7",
                                xl: "h7",
                              },
                              fontWeight: {
                                xs: 700,
                                sm: 700,
                                md: 700,
                                lg: 700,
                                xl: 700,
                              },
                            }}
                          >
                            {experience.year}
                          </Typography>
                        </Stack>
                        <CardContent>
                          <Typography
                            gutterBottom
                            sx={{
                              typography: {
                                xs: "body2",
                                sm: "body1",
                                md: "h6",
                                lg: "h6",
                                xl: "h5",
                              },
                              fontWeight: {
                                xs: 700,
                                sm: 700,
                                md: 700,
                                lg: 700,
                                xl: 700,
                              },
                            }}
                            component="div"
                            className={classes.roleTitle}
                          >
                            {experience.title}
                          </Typography>
                          <Typography
                            sx={{
                              typography: {
                                xs: "caption",
                                sm: "body3",
                                md: "body3",
                                lg: "body1",
                                xl: "body1",
                              },
                              fontWeight: {
                                xs: 700,
                                sm: 700,
                                md: 700,
                              },
                            }}
                            color={"#000"}
                            className={classes.description}
                          >
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
                  sx={{
                    height: { xs: 30, sm: 30, md: 40, lg: 60, xl: 60 },
                    width: { xs: 30, sm: 30, md: 40, lg: 60, xl: 60 },
                  }}
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
