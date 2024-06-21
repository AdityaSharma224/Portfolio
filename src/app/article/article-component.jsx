import React from "react";
import Stack from "@mui/material/Stack";
import useStyles from "./article-styles";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ArticleComponent = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Stack id="articles" className={classes.wrapper}>
      <Stack className={classes.innerWrapper}>
        <Stack className={classes.titleWrapper} flexDirection={"row"}>
          <Stack className={classes.title} flexDirection={"row"}>
            <Typography color={"#fff"} sx={{ typography: { lg: "h5", md:'h5',sm:'h6',xs:'body1'} }}>
              {"Technical articles"}
            </Typography>
          </Stack>
          <Stack className={classes.selector}>
            <FormControl sx={{ m: 1, minWidth: 120, color:'#fff' }} size="small">
              <InputLabel id="demo-select-small-label" color='primary'>Category</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                autoWidth
                onChange={handleChange}
                className={classes.select}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Data structures</MenuItem>
                <MenuItem value={10}>Algorithm</MenuItem>
                <MenuItem value={20}>Web Development</MenuItem>
                <MenuItem value={30}>Computer Networks</MenuItem>
                <MenuItem value={30}>Chat GPT</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <Stack className={classes.table}>

        </Stack>
      </Stack>
    </Stack>
  );
};

export default ArticleComponent;
