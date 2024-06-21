import React from "react";
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
import { articles } from "../constants";

const ArticleComponent = () => {
  const classes = useStyles();
  const [category, setCategory] = React.useState("dataStructure");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredArticles = articles.filter(
    (article) => article.category === category
  );

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
              <InputLabel id="demo-select-small-label" color="primary">
                Category
              </InputLabel>
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
        <Stack className={classes.tableWrapper}>
          <Stack className={classes.table}>
            <TableContainer
              component={Paper}
              style={{ height: filteredArticles.length * 88 + "px" }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Serial No</TableCell>
                    <TableCell>Article Title</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredArticles.map((article, index) => (
                    <TableRow key={article.id}>
                      <TableCell>
                        {index + 1}
                      </TableCell>
                      <TableCell>
                        <a
                          href={article.link}
                          style={{
                            textDecoration: "none",
                            color: "#1976d2",
                          }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {article.title}
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ArticleComponent;
