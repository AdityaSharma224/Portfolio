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
      description: CAST_DESCRIPTION,
    },
    {
      icon: CONTLOIcon,
      year: "07/2023 - 10/2023",
      title: "Software Development Engineer Intern",
      description: CONTLO_DESCRIPTION,
    },
    {
      icon: GFGIcon,
      year: "10/2022 - 06/2023",
      title: "Member of Technical Staff Intern",
      description: GFG_DESCRIPTION,
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
                  fontSize="large"
                />
              </IconButton>
              {experiences.map(
                (experience, index) =>
                  index === currentIndex && (
                    <Card
                      key={index}
                      sx={{
                        maxWidth: 600,
                        minWidth: 600,
                        height: 600,
                        borderRadius: "20px",
                      }}
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
                          <Typography variant="body2" color="text">
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
                  fontSize="large"
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
