import { Typography, Grid, Box, Link } from "@mui/material";
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import { helpfulLinks } from "../constants/footerData";

const Footer = () => {
  return (
    <Box
      marginTop={10}
      paddingY={8}
      sx={{ backgroundColor: "#2C5F2DFF", minHeight: "30vh", width: "100vw" }}
    >
      <Grid container spacing={2}>
        <Grid
          container
          direction="column"
          item
          alignItems="center"
          justifyContent="center"
          xs={4}
          spacing={11}
        >
          <Grid item>
            <Typography variant="h3" color="#fff" padding={2}>
              A a s t h a
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          // direction="column"
          item
          xs={4}
          spacing={2}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <Grid item>
            <Box
              border={2}
              borderColor={"white"}
              borderRadius={2}
              padding={0.75}
            >
              <Typography color={"white"}>Helpful Links</Typography>
            </Box>
          </Grid>
          {helpfulLinks.map((helpfulLink) => {
            return (
              <Grid item xs={12}>
                <Link href={helpfulLink.link} color="#fff" underling="hover">
                  {helpfulLink.name}
                </Link>
              </Grid>
            );
          })}
        </Grid>

        {/* <Grid container direction="column" item xs={2} spacing={2}>
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
        </Grid> */}

        <Grid
          container
          // direction="column"
          item
          xs={3}
          // spacing={1}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <Grid item>
            <Box
              border={2}
              borderColor={"white"}
              borderRadius={2}
              padding={0.75}
            >
              <Typography color={"white"}>Contact Us</Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            {/* <Grid item xs={1} md={1}>
              <LocationOnIcon sx={{ color: "#fff" }} />
            </Grid> */}

            {/* <Grid item xs={11} md={10}> */}
            <Typography color="white">Bolachhen-4, Bhaktapur</Typography>
            {/* </Grid> */}
          </Grid>

          <Grid item xs={12}>
            {/* <Grid item>
              <PhoneIcon sx={{ color: "#fff" }} />
            </Grid> */}

            {/* <Grid item> */}
            <Typography color="white">01-6616904</Typography>
            {/* </Grid> */}
          </Grid>

          {/* <Grid item> */}
          {/* <Grid item>
              <EmailIcon sx={{ color: "#fff" }} />
            </Grid> */}

          <Grid item xs={12}>
            <Typography
              color="white"
              // sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
              aastha.saccos@gmail.com
            </Typography>
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
