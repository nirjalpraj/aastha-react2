import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import * as React from "react";
import Grid from "@mui/material/Grid";
import TabPanel from "./components/SideComponent";
import CouroselComponent from "./components/CouroselComponent";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container paddingTop={2.5} direction="column" spacing={10}>
        <Grid container item spacing={2}>
          <Grid item xs="1" />
          <Grid item xs="7">
            <CouroselComponent />
          </Grid>
          <Grid item xs="3">
            <TabPanel />
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Introduction />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
