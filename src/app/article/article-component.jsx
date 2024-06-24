import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import useStyles from "./article-styles";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { articles } from "../constants";

const ArticleComponent = () => {
  const classes = useStyles();
  const [category, setCategory] = React.useState("dataStructure");
  const [sliderIndex, setSliderIndex] = React.useState(0);

  const cardInfo = [
    {
      title: "Binary Trees",
      description:
        "Binary trees are a type of data structure for storing data such as hierarchical data.",
      image: "/static/images/cards/binary-tree.jpg",
      link: "#binaryTree",
      category: "dataStructure",
    },
    {
      title: "Linked Lists",
      description:
        "Linked lists are a linear collection of data elements where each element points to the next.",
      image: "/static/images/cards/linked-list.jpg",
      link: "#linkedList",
      category: "dataStructure",
    },
    {
      title: "awdawdawd",
      description:
        "Graphs are a set of nodes connected by edges, used to represent networks.",
      image: "/static/images/cards/graph.jpg",
      link: "#graph",
      category: "dataStructure",
    },
    {
      title: "Bawdawdaws",
      description:
        "Binary trees are a type of data structure for storing data such as hierarchical data.",
      image: "/static/images/cards/binary-tree.jpg",
      link: "#binaryTree",
      category: "dataStructure",
    },
    {
      title: "Liawdawdts",
      description:
        "Linked lists are a linear collection of data elements where each element points to the next.",
      image: "/static/images/cards/linked-list.jpg",
      link: "#linkedList",
      category: "dataStructure",
    },
    {
      title: "awdawdawd",
      description:
        "Graphs are a set of nodes connected by edges, used to represent networks.",
      image: "/static/images/cards/graph.jpg",
      link: "#graph",
      category: "dataStructure",
    },
  ];

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
          <Stack className={classes.title} flexDirection={"row"}>
            <Typography
              color={"#fff"}
              sx={{ typography: { lg: "h5", md: "h5", sm: "h6", xs: "body1" } }}
            >
              {"Technical articles"}
            </Typography>
          </Stack>
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
          <Button onClick={goToPrevSlide}>Prev</Button>
          {displayedCards.map((card, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 345,
                backgroundColor: "#fff",
                borderRadius: "20px",
                margin: "0 8px",
                flexDirection: "column",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ textTransform: "none" }}>
                  Go to article
                </Button>
              </CardActions>
            </Card>
          ))}
          <Button onClick={goToNextSlide}>Next</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ArticleComponent;
