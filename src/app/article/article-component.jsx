import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import useStyles from "./article-styles";
import { IconButton, Typography } from "@mui/material";
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
import Button from "@mui/material/Button";
import { cardInfo } from "../constants";

const ArticleComponent = () => {
  const classes = useStyles();
  const [category, setCategory] = React.useState("dataStructure");
  const [sliderIndex, setSliderIndex] = React.useState(0);

  const handleChange = (event) => {
    setCategory(event.target.value);
    setSliderIndex(0); // Reset the slider index when category changes
  };

  const filteredCardInfo = cardInfo.filter(
    (card) => card.category === category
  );
  const displayedCards = filteredCardInfo.slice(
    sliderIndex * 3,
    (sliderIndex + 1) * 3
  );

  const goToPrevSlide = () => {
    setSliderIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(filteredCardInfo.length / 3)) %
        Math.ceil(filteredCardInfo.length / 3)
    );
  };

  const goToNextSlide = () => {
    setSliderIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(filteredCardInfo.length / 3)
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
                sx={{ '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' } }}
              >
                <MenuItem value={"dataStructure"}>Data structures</MenuItem>
                <MenuItem value={"algorithm"}>Algorithm</MenuItem>
                <MenuItem value={"webDevelopment"}>Web Development</MenuItem>
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
                height: { xs: 30, sm: 30, md: 40, lg: 60, xl: 60 },
                width: { xs: 30, sm: 30, md: 40, lg: 60, xl: 60 },
              }}
            />
          </IconButton>{" "}
          {displayedCards.map((card, index) => (
            <Card
              key={index}
              sx={{
                height: { xs: 400, sm: 400, md: 300, lg: 400, xl: 400 },
                width: { xs: 350, sm: 400, md: 300, lg: 400, xl: 400 },
                backgroundColor: "#fff",
                borderRadius: "20px",
                margin: "0 8px",
                flexDirection: "column",
                "&:nth-of-type(n+2)": {
                  display: { xs: 'none', sx: 'none', sm: 'none', md: 'block', lg:'block' }, // Hide second and third card on 'sm' and below
                },
              }}
            >
              <CardMedia
                sx={{ height: '45%', objectFit:'cover' }}
                image={card.image}
                title={card.title}
              />
              <CardContent sx={{height:'40%'}}>
                <Typography gutterBottom variant="body1" fontWeight={700} component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="text" sx={{ textTransform: "none" }} href={card.link} target="_blank">
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
                height: { xs: 30, sm: 30, md: 40, lg: 60, xl: 60 },
                width: { xs: 30, sm: 30, md: 40, lg: 60, xl: 60 },
              }}
            />
          </IconButton>{" "}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ArticleComponent;
