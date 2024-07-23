import React from "react";
import { Stack, Typography } from "@mui/material";

const PeopleCards = ({ imageUrl, name, role, testimonial, className }) => {
  return (
    <Stack
      width={"100%"}
      className={className}
      sx={{
        maxWidth: {
          xs: "350px",
          sm: "380px",
          md: "400px",
          lg: "600px",
          xl: "600px",
        },
      }}
      height={'280px'}
      borderRadius={"10px"}
      padding={2}
      boxShadow={
        "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.19)"
      }
      marginBottom={2}
    >
      <Stack flexDirection={"row"} alignItems={"center"} gap={2} padding={1}>
        <Stack
          component={"img"}
          src={imageUrl}
          height={"60px"}
          width={"60px"}
          borderRadius={"50%"}
        />
        <Stack>
          <Typography
            sx={{
              typography: {
                xs: "body1",
                sm: "body1",
                md: "h6",
                lg: "h6",
                xl: "h6",
              },
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              typography: {
                xs: "subtitle2",
                sm: "subtitle2",
                md: "body2",
                lg: "body2",
                xl: "body2",
              },
            }}
            color={"#7C7C7C"}
          >
            {role}
          </Typography>
        </Stack>
      </Stack>
      <Stack alignItems={"flex-start"}>
        <Typography
          sx={{
            typography: {
              xs: "subtitle2",
              sm: "subtitle2",
              md: "subtitle1",
              lg: "subtitle1",
              xl: "subtitle1",
            },
            fontWeight: {
              xs: 500,
              sm: 500,
              md: 500,
              lg: 500,
              xl: 500,
            },
          }}
          style={{ overflowWrap: "break-word", wordWrap: "break-word" }}
        >
          {testimonial}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PeopleCards;
