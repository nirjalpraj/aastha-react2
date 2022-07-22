import * as React from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Saving = () => {
  return (
    <Box>
      <Header />
      <Box style={{ padding: 35, background: "#FFE77AFF" }}>
        <Typography variant="h3" color="#303132" textAlign="center">
          Savings
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={9}>
          <GridFolder />
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
};

export default Saving;

const GridFolder = () => {
  return (
    <Grid container spacing={4} padding={2.5}>
      {itemData.map((item) => (
        <Grid item>
          <Card sx={{ width: 345 }}>
            <CardMedia
              component="img"
              height="450"
              image={item.img}
              alt="green iguana"
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const itemData = [
  {
    img: "https://source.unsplash.com/random/200*300/?breakfast",
  },
  {
    img: "https://source.unsplash.com/random/200*300/?apple",
  },
  {
    img: "https://source.unsplash.com/random/200*300/?mango",
  },
  {
    img: "https://source.unsplash.com/random/200*300/?car",
  },
  {
    img: "https://source.unsplash.com/random/200*300/?moon",
  },
];
