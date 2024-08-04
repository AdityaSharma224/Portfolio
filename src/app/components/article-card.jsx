import React from "react";
import { Stack, Typography, Button } from "@mui/material";

const ArticleCard = ({ imageUrl, articleName, testimonial, className }) => {
  return (
    <Stack
      width={"100%"}
      className={className}
      sx={{
        maxWidth: {
          xs: "350px",
          sm: "380px",
          md: "400px",
          lg: "400px",
          xl: "400px",
        },
      }}
      height={'300px'}
      borderRadius={"10px"}
      padding={1}
      boxShadow={
        "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.19)"
      }
    >
      <Stack flexDirection={"column"} alignItems={"flex-start"} gap={1}>
        <Stack
          component={"img"}
          src={imageUrl}
          height={"150px"}
          width={"100%"}
        />
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
            {articleName}
          </Typography>
      </Stack>
      <Stack alignItems={"flex-start"} justifyContent={'space-between'} gap={1} width={'100%'} height={'100%'}>
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
        <Typography alignSelf={'flex-end'} color={'#1976d2'} fontWeight={700} variant="body2" sx={{cursor:'pointer'}}>{'Link to article'}</Typography>
      </Stack>
    </Stack>
  );
};

export default ArticleCard;
