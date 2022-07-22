import * as React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Introduction = () => {
  return (
    <Box
      marginTop="10"
      marginButtom="10"
      padding="10"
      height="400"
      backgroundColor="#E9B845"
    >
      <Grid container spacing={5} direction="column">
        <Grid item xs={2}>
          <Typography variant="h3">Introduction</Typography>
        </Grid>
        <Grid item>
          <Typography>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt
            </p>
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item xs={10} />
          <Grid item xs={2}>
            <Button component={RouterLink} to="/aboutus">
              Read More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
