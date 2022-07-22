import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Notice/Modal";
import {
  Grid,
  Card,
  CardMedia,
  CardActions,
  Button,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const Notice = () => {
  return (
    <div>
      <Header />
      <Box style={{ padding: 35, background: "#FFE77AFF" }}>
        <Typography variant="h3" color="#303132" textAlign="center">
          Notice
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={7}>
          <GridFolder />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default Notice;

const GridFolder = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Grid container direction="column" spacing={4} paddingTop={5}>
      {itemData.map((item) => (
        <Grid item>
          <Card sx={{ width: 750 }} style={{ background: "#E3F2FD" }}>
            <Grid container>
              <Grid item xs={3}>
                <CardMedia
                  component="img"
                  height="150"
                  image={item.img}
                  alt="green iguana"
                />
              </Grid>

              <Grid item xs={9}>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {item.title}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Grid container direction="row">
                    <Grid item xs={10}>
                      <Button
                        size="small"
                        onClick={() => {
                          setIsOpen(true);
                        }}
                      >
                        {" "}
                        Explore
                      </Button>
                    </Grid>

                    <Grid item>
                      <Typography variant="basic2">{item.date}</Typography>
                    </Grid>
                  </Grid>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
      >
        <Box marginBottom={5}>
          <img src="https://source.unsplash.com/700x800" />
        </Box>
      </Modal>
    </Grid>
  );
};

const itemData = [
  {
    img: "https://source.unsplash.com/random/200*300/?breakfast",
    date: "2074/4/5",
    title: "17 th Annual General Meeting",
  },
  {
    img: "https://source.unsplash.com/random/200*300/?night",
    date: "2074/4/5",
    title: "Breakfast",
  },
  {
    img: "https://source.unsplash.com/random/200*300/?cars",
    date: "2074/4/5",
    title: "Breakfast",
  },
  {
    img: "https://source.unsplash.com/random/200*300/?logo",
    date: "2074/4/5",
    title: "Breakfast",
  },
  {
    img: "https://source.unsplash.com/random/200*300/?logo",
    date: "2074/4/5",
    title: "Breakfast",
  },
  {
    img: "https://source.unsplash.com/random/200*300/?logo",
    date: "2074/4/5",
    title: "Breakfast",
  },
];
