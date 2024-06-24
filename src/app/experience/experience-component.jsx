import React from "react";
import Stack from "@mui/material/Stack";
import useStyles from "./experience-styles";
import MyAboutImage from "../../assets/about-image.jpg";
import { Typography } from "@mui/material";
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
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

const ExperienceComponent = () => {
  const classes = useStyles();

  const experiences = [
    {
      icon: (
        <Stack
          component={"img"}
          borderRadius={"20px"}
          src={CASTIcon}
          className={classes.cLogo}
        />
      ),
      year: "10/2023  -  Present",
      title: "Software Development Engineer - 1",
      description: CAST_DESCRIPTION,
    },
    {
      icon: (
        <Stack
          component={"img"}
          borderRadius={"20px"}
          src={CONTLOIcon}
          height={"50px"}
          width={"120px"}
        />
      ),
      year: "07/2023  -  10/2023",
      title: "Software Development Engineer Intern",
      description: CONTLO_DESCRIPTION,
    },
    {
      icon: (
        <Stack
          component={"img"}
          borderRadius={"20px"}
          src={GFGIcon}
          height={"50px"}
          width={"200px"}
        />
      ),
      year: "10/2022  -  06/2023",
      title: "Member of Technical Staff Intern",
      description: GFG_DESCRIPTION,
    },
  ];

  return (
    <Stack className={classes.wrapper} id="experience">
      <Stack flexDirection={"row"} width="100%" height="100%">
        <img
          className={classes.myImage}
          src={MyAboutImage}
          width={"40%"}
          height={"100%"}
          alt="myimage"
        ></img>
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
              {"Experience"}
            </Typography>
            <Stack
              sx={{ height: "100%", width: "100%", alignItems: "center" }}
              flexDirection={"row"}
              gap={2}
              borderRadius={'20px'}
            >
              <Button>{"Prev"}</Button>
              <Card sx={{ maxWidth: 600, minWidth:600,height: 600, borderRadius:'20px' }}>
                <CardActionArea sx={{borderRadius:'20px'}}>
                   <Stack padding={2} flexDirection={'row'} alignItems={'flex-end'} justifyContent={'space-between'} sx={{borderRadius:'20px'}}>
                    <img src={CASTIcon} height={'80px'} width={'280px'}></img>
                    <Typography variant="h6">{'tenure'}</Typography>
                   </Stack>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {'Software Development Engineer'}
                    </Typography>
                    <Typography variant="body2" color="text">
                      {''}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Button>{"Next"}</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ExperienceComponent;
