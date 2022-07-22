import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Grid, Typography } from "@mui/material";
import BasicTable from "../components/BasicTable";

const Downloads = () => {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={7}>
          <Grid
            container
            spacing={2}
            direction="column"
            paddingTop={4}
            paddingBottom={4}
          >
            <Grid justifyContent="center" container item xs={2}>
              <Typography variant="h4">Report</Typography>
            </Grid>
            <Grid item xs={7}>
              <BasicTable arr={Reports} />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            direction="column"
            paddingTop={4}
            paddingBottom={4}
          >
            <Grid justifyContent="center" container item xs={2}>
              <Typography variant="h4">Forms</Typography>
            </Grid>
            <Grid item xs={7}>
              <BasicTable arr={Forms} />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            direction="column"
            paddingTop={4}
            paddingBottom={4}
          >
            <Grid justifyContent="center" container item xs={2}>
              <Typography variant="h4">Legal Documents</Typography>
            </Grid>
            <Grid item xs={7}>
              <BasicTable arr={LegalDocument} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Footer />
    </div>
  );
};

export default Downloads;

const Reports = [
  {
    headline: "apple",
    uploadDate: "2075/08/27",
  },
  {
    headline: "banana",
    uploadDate: "2075/08/27",
  },
];

const Forms = [
  {
    headline: "pineapple",
    uploadDate: "2075/08/27",
  },
  {
    headline: "mango",
    uploadDate: "2075/08/27",
  },
];

const LegalDocument = [
  {
    headline: "papaya",
    uploadDate: "2075/08/27",
  },
  {
    headline: "potato",
    uploadDate: "2075/08/27",
  },
];
