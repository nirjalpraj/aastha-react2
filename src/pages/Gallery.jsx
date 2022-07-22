import * as React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardActions, CardMedia, Button, Box, Typography } from "@mui/material";

const Gallery = () => {
  return (
    <div>
      <Header />
      <Box style={{ padding: 35, background: "#FFE77AFF" }}>
        <Typography variant="h3" color="#303132" textAlign="center">
          Gallery
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={9}>
          <GridFolder />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default Gallery;

const GridFolder = () => {
  return (
    <Grid container spacing={4} padding={2.5}>
      {itemData.map((item) => (
        <Grid item>
          <Card sx={{ width: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={item.img}
              alt="green iguana"
            />
            {/* <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                </CardContent> */}
            <CardActions>
              <Button size="small">{item.title}</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const itemData = [
  {
    img: "https://source.unsplash.com/random/200*300/?breakfast",
    title: "Sweets Training",
  },
  {
    img: "https://source.unsplash.com/random/200*300/?burger",
    title: "6th Annual General Meeting",
  },
  {
    img: "https://source.unsplash.com/random/?camera",
    title: "Handicrafts Training",
  },
  {
    img: "https://source.unsplash.com/random/?coffee",
    title: "Plumber Training",
  },
  {
    img: "https://source.unsplash.com/random/?hats",
    title: "5th Annual General Meeting",
  },
  {
    img: "https://source.unsplash.com/random/?mango",
    title: "Kalinchowk Tour",
  },
];
