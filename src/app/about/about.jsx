import React, { useState } from "react";
import { Link } from "react-scroll";
import useStyles from "./about-styles";
import Stack from "@mui/material/Stack";
import MenuImg from "../../assets/menu.png";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AboutBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleExpansion = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <Stack className={classes.wrapper} onClick={toggleExpansion}>
        <Typography
          variant="h5"
          sx={{
            alignSelf: "center",
            color: "#fff",
            typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5", xl: "h5" },
          }}
        >
          {open ? (
            <CloseIcon
              sx={{ alignSelf: "flex-end", height: "50px", width: "50px" }}
            />
          ) : (
            "About"
          )}
        </Typography>
      </Stack>
      {open && (
        <Stack className={classes.downMenu}>
          <Typography
            textAlign={'start'}
            sx={{
              typography: {
                xs: "body1",
                sm: "body1",
                md: "body1",
                lg: "h6",
                xl: "h6",
              },
            }}
            color={"#fff"}
          >
            {"Hey everyone, Aditya here!!!"}
          </Typography>
          <Typography
            textAlign={"start"}
            sx={{
              typography: {
                xs: "body1",
                sm: "body1",
                md: "body1",
                lg: "h6",
                xl: "h6",
              },
            }}
            color={"#fff"}
          >
            {"Enthusiastic and curious to learn new skills."}
          </Typography>
          <Typography
            textAlign={"start"}
            sx={{
              typography: {
                xs: "body1",
                sm: "body1",
                md: "body1",
                lg: "h6",
                xl: "h6",
              },
            }}
            color={"#fff"}
          >
            {
              "Currently, I am working as a Software Engineer at CAST Software. Previously worked at Contlo and GeeksforGeeks got (1 Million+ Views) on Articles."
            }
          </Typography>
          <Typography
            textAlign={"start"}
            sx={{
              typography: {
                xs: "body1",
                sm: "body1",
                md: "body1",
                lg: "h6",
                xl: "h6",
              },
            }}
            color={"#fff"}
          >
            {
              "I am a computer science student at CUIET'24. Being from a tech background I am interested in programming using C/C++ along with Data Structures and Algorithms."
            }
          </Typography>
          <Typography
            textAlign={"start"}
            sx={{
              typography: {
                xs: "body1",
                sm: "body1",
                md: "body1",
                lg: "h6",
                xl: "h6",
              },
            }}
            color={"#fff"}
          >
            {
              "I have good programming skills in C++, strong problem-solving skills and computer fundamentals. I am a Full-Stack Developer and Proficient in Python, React js, Express js, Node js, MongoDB, Pinecone, Redis and PostgreSQL."
            }
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default AboutBar;
