import { Typography, Grid, Box, Link } from "@mui/material";
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box paddingTop={8} marginTop={10} paddingBottom={4} sx={{ backgroundColor: "#078080", minHeight: "30vh" }}>
      <Grid container spacing={2}>
        
        <Grid container direction="column" item xs={3} spacing={11}>
          <Grid item/>
          <Grid item>
            <Typography variant="h5" color="#fff">A  a  s  t  h  a</Typography>
          </Grid>

        </Grid>

        <Grid container direction="column" item xs={3} spacing={2}>
          <Grid item>
            <Typography>Helpful Links</Typography>
          </Grid>

          <Grid item>
            <Link
              href="https://www.nefscun.org.np/"
              underline="hover"
              color="#fff"
            >
              Nefscun
            </Link>
          </Grid>

          <Grid item>
            <Link
              href="http://bhaktapurdcu.coop.np//"
              underline="hover"
              color="#fff"
            >
              Bhaktapur Jilla Bachat Sangh
            </Link>
          </Grid>

          <Grid item>
            <Link
              href="https://ncfnepal.com.np/"
              underline="hover"
              color="#fff"
            >
              National Cooperative Federation of Nepal
            </Link>
          </Grid>

          <Grid item>
            <Link href="http://molcpa.gov.np/" underline="hover" color="#fff">
              Ministry Of Land Management, Cooperatives And Poverty Alleviation
            </Link>
          </Grid>

          <Grid item>
            <Link href="http://www.deoc.gov.np/" underline="hover" color="#fff">
              Department Of Cooperatives
            </Link>
          </Grid>
        </Grid>

        <Grid container direction="column" item xs={2} spacing={2}>
          <Grid item>
            <Typography>Explore</Typography>
          </Grid>

          <Grid item>
            <Link component={RouterLink} to="/" underline="hover" color="#fff">
              Home
            </Link>
          </Grid>

          <Grid item>
            <Link
              component={RouterLink}
              to="/notice"
              underline="hover"
              color="#fff"
            >
              Notice
            </Link>
          </Grid>

          <Grid item>
            <Link
              component={RouterLink}
              to="/downloads"
              underline="hover"
              color="#fff"
            >
              Downloads
            </Link>
          </Grid>

          <Grid item>
            <Link
              component={RouterLink}
              to="/news"
              underline="hover"
              color="#fff"
            >
              News
            </Link>
          </Grid>

          <Grid item>
            <Link
              component={RouterLink}
              to="/service"
              underline="hover"
              color="#fff"
            >
              Service
            </Link>
          </Grid>
        </Grid>

        <Grid container direction="column" item xs={3}>
          <Grid item>
            <Typography>Contact Us</Typography>
          </Grid>
          <Grid container item>
            <Grid item>
              <LocationOnIcon color="success" />
            </Grid>

            <Grid item xs={11}>
              <Typography style={{ textAlign: "center",color: "#fff" }}>
                Bolachhen-4, Bhaktapur
              </Typography>
            </Grid>
          </Grid>

          <Grid item container spacing={4}>
            <Grid item>
              <PhoneIcon color="info" />
            </Grid>

            <Grid item>
              <Typography style={{ textAlign: "center", color: "#fff" }}>
                01-6616904
              </Typography>
            </Grid>
          </Grid>

          <Grid item container spacing={2}>
            <Grid item>
              <EmailIcon color="secondary" />
            </Grid>

            <Grid item>
              <Typography style={{ textAlign: "center", color: "#fff" }}>
                aastha.saccos@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
