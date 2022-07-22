import * as React from 'react';
import {Grid, Typography} from '@mui/material';
import Header from '../components/Header';
import { Box } from '@mui/system';

const Mission = () =>{
    return(
        <div>
            <Header/>
            <Box>
                <Grid container spacing={10} paddingTop={10}>
                    <Grid item xs={2}/>
                    <Grid item direction='column' spacing ={5} container xs={6}>
                        <Grid item>
                            <Typography variant='h4' >Mission and Vision</Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant='body1'>Mission: Lorem ipsum dolor sit amet, consectetur adipiscing elit </Typography>
                            <Typography variant='body1'>Vision: Lorem ipsum dolor sit amet, consectetur adipiscing elit </Typography>
                        </Grid>

                       
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Mission;