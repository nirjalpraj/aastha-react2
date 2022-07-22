import * as React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Paper } from "@mui/material";

const CouroselComponent = () => {
  return (
    <Box>
      <Carousel fullHeightHover={false} navButtonsAlwaysVisible={true}>
        {itemData.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default CouroselComponent;

function Item(props) {
  return (
    <Paper>
      <img
        width="800"
        height="500"
        borderRadius="30"
        src={`${props.item.img}?w=800&h=500&fit=crop&auto=format`}
        srcSet={`${props.item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={props.item.title}
        loading="lazy"
      />
      <h2>{props.item.title}</h2>
      <p>{props.item.description}</p>
    </Paper>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
];
