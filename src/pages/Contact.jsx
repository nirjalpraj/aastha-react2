import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Grid, Box, Typography, Link, TextField, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import FormComponent from "../components/FormComponent";

const Contact = () => {
  return (
    <div>
      <Header />
      <Box elevation={3} sx={{ height: "100vh" }}>
        <Grid container paddingTop={15}>
          <Grid item xs={1} />

          <Grid item xs={5}>
            <FormComponent />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={4}>
            <Box sx={{ backgroundColor: "#35477d", height: "80vh" }}>
              <Grid container paddingTop={5}>
                <Grid item xs={1} />
                <Grid container direction="column" spacing={2} item xs={10}>
                  <Grid item>
                    <Typography style={{ textAlign: "center", color: "#fff" }}>
                      Contact Information
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography style={{ color: "#fff" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </Typography>
                  </Grid>

                  <Grid item container spacing={2}>
                    <Grid item>
                      <LocationOnIcon color="success" />
                    </Grid>

                    <Grid item>
                      <Typography
                        style={{ textAlign: "center", color: "#fff" }}
                      >
                        Bolachhen-4, Bhaktapur
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item container spacing={2}>
                    <Grid item>
                      <PhoneIcon color="info" />
                    </Grid>

                    <Grid item>
                      <Typography
                        style={{ textAlign: "center", color: "#fff" }}
                      >
                        01-6616904
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item container spacing={2}>
                    <Grid item>
                      <EmailIcon color="secondary" />
                    </Grid>

                    <Grid item>
                      <Typography
                        style={{ textAlign: "center", color: "#fff" }}
                      >
                        aastha.saccos@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item container spacing={2}>
                    <Grid item>
                      <FacebookIcon color="info" />
                    </Grid>

                    <Grid item>
                      <Typography
                        style={{ textAlign: "center", color: "#fff" }}
                      >
                        <Link
                          href="https://www.facebook.com/aastha.saccos.14"
                          underline="hover"
                          color="#fff"
                        >
                          Aastha Saccos
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Contact;
