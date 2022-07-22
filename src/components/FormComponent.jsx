import * as React from 'react';


import {Box, Button, TextField, Grid, Typography} from '@mui/material';

import emailjs from '@emailjs/browser';
import { Email } from '@mui/icons-material';




const FormComponent = () => {

  const form = React.useRef();

  const sendEmail = () => {
    console.log(form.current);
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID , process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return(

    <Box style={{border:5}}>
      <form ref={form}>
        <Grid container spacing={8} direction='column'>
          <Grid item xs={2} paddingBottom={3}>
            <Typography>Send us a message</Typography>
          </Grid>
          <Grid item container spacing={20} direction='row'>
            <Grid item>
              <TextField
                fullWidth
                required
                id="standard-required"
                type="text"
                label="Name"
                defaultValue="Your Name"
                variant="standard"
              />
            </Grid>

            <Grid item>
              <TextField
                required
                id="standard-required"
                type='email'
                label="Email"
                defaultValue="Your email"
                variant="standard"
              />
            </Grid>
          </Grid>

        
            <Grid item>
              <TextField
                id="standard-required"
                type="number"
                label="Phone Number"
                defaultValue="Hello World"
                variant="standard"
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                required
                id="standard-multiline-static"
                label="Message"
                multiline
                fullWidth
                rows={4}
                variant="standard"
                defaultValue="Write your message"

              />
            </Grid>

            <Grid item>
              <Button
                sx={{margin: 1}}
                variant="contained"
                color="success" 
                disableElevation 
              >
                Submit
              </Button>
            </Grid>
        </Grid>
      </form>
    </Box>

);
}

export default FormComponent;

