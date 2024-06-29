import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import useStyles from "./article-styles";
import { IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { createTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { cardInfo } from "../constants";

const ArticleComponent = () => {
  const classes = useStyles();
  const [category, setCategory] = useState("dataStructure");
  const [sliderIndex, setSliderIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 380,
        xs: 500,
        sm: 600,
        md: 1000,
        lg: 1300,
        xl: 1400,
      },
    },
  });
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setCardsPerPage(isSmallScreen ? 1 : 3);
  }, [isSmallScreen]);

  const handleChange = (event) => {
    setCategory(event.target.value);
    setSliderIndex(0); // Reset the slider index when category changes
  };

  const filteredCardInfo = cardInfo.filter(
    (card) => card.category === category
  );
  const displayedCards = filteredCardInfo.slice(
    sliderIndex * cardsPerPage,
    (sliderIndex + 1) * cardsPerPage
  );

  const goToPrevSlide = () => {
    setSliderIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(filteredCardInfo.length / cardsPerPage)) %
        Math.ceil(filteredCardInfo.length / cardsPerPage)
    );
  };

  const goToNextSlide = () => {
    setSliderIndex(
      (prevIndex) =>
        (prevIndex + 1) % Math.ceil(filteredCardInfo.length / cardsPerPage)
    );
  };

  return (
    <Stack id="articles" className={classes.wrapper}>
      <Stack className={classes.innerWrapper}>
        <Stack className={classes.titleWrapper} flexDirection={"row"}>
          <Stack className={classes.selector}>
            <FormControl
              sx={{ m: 1, minWidth: 120, color: "#fff" }}
              size="small"
            >
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={category}
                autoWidth
                onChange={handleChange}
                className={classes.select}
                sx={{
                  ".MuiOutlinedInput-notchedOutline": { borderStyle: "none" },
                }}
              >
                <MenuItem value={"dataStructure"}>Data structures</MenuItem>
                <MenuItem value={"handbook"}>Handbook</MenuItem>
                <MenuItem value={"computerNetworks"}>
                  Computer Networks
                </MenuItem>
                <MenuItem value={"chatGpt"}>Chat GPT</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <Stack className={classes.tableWrapper} flexDirection={"row"}>
          <IconButton onClick={goToPrevSlide}>
            <KeyboardDoubleArrowLeftIcon
              htmlColor="#fff"
              className={classes.icon}
              sx={{
                height: { xs: 40, sm: 40, md: 40, lg: 60, xl: 60 },
                width: { xs: 40, sm: 40, md: 40, lg: 60, xl: 60 },
              }}
            />
          </IconButton>{" "}
          {displayedCards.map((card, index) => (
            <Card
              key={index}
              sx={{
                height: {
                  xxs: 400,
                  xs: 400,
                  sm: 400,
                  md: 300,
                  lg: 400,
                  xl: 400,
                },
                width: {
                  xxs: 280,
                  xs: 320,
                  sm: 400,
                  md: 300,
                  lg: 400,
                  xl: 400,
                },
                backgroundColor: "#fff",
                borderRadius: "20px",
                margin: "0 8px",
                flexDirection: "column",
              }}
            >
              <CardMedia
                sx={{ height: "45%", objectFit: "cover" }}
                image={card.image}
                title={card.title}
              />
              <CardContent sx={{ height: "40%" }}>
                <Typography
                  gutterBottom
                  sx={{
                    typography: {
                      xs: "body2",
                      sm: "body2",
                      md: "body1",
                      lg: "body1",
                      xl: "body1",
                    },
                  }}
                  fontWeight={700}
                  component="div"
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  overflow={"hidden"}
                  sx={{
                    typography: {
                      xs: "caption",
                      sm: "caption",
                      md: "body2",
                      lg: "body2",
                      xl: "body2",
                    },
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="text"
                  sx={{ textTransform: "none", marginTop: 1 }}
                  href={card.link}
                  target="_blank"
                >
                  Go to article
                </Button>
              </CardActions>
            </Card>
          ))}
          <IconButton onClick={goToNextSlide}>
            <KeyboardDoubleArrowRightIcon
              htmlColor="#fff"
              className={classes.icon}
              sx={{
                height: { xs: 40, sm: 40, md: 40, lg: 60, xl: 60 },
                width: { xs: 40, sm: 40, md: 40, lg: 60, xl: 60 },
              }}
            />
          </IconButton>{" "}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ArticleComponent;
