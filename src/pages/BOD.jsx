import * as React from 'react';
import Header from '../components/Header';
import {Grid, Box, Typography, Card} from '@mui/material';

const BOD = () => {
    return(
        <div> 
            <Header/>
            <Box>
                <Grid container paddingTop={10}>
                    <Grid item xs={2}/>
                    <Grid item container direction='column' spacing={10} xs={8}>

                        <Grid item>
                            <Typography variant='h4' style={{textAlign: 'center'}}>Board of Directors</Typography>
                        </Grid>
                        <Grid item>
                            <GridFolder/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default BOD;


const GridFolder = () =>{
    return(
      <Grid container spacing={4} padding={2.5}>
    
            
            {itemData.map((item)=>(
                    <Grid item>
                        <Card>
                            <img src={item.img} alt="logo" style={{height:350, width:255}} />

                            <Typography variant='body1'style={{textAlign: 'center'}} paddingTop={3}> {item.name} </Typography>

                            <Typography variant='body1' style={{textAlign: 'center'}} paddingTop={3} paddingBottom={2}> {item.designation} </Typography>
                        </Card>
                    </Grid>
            
            ))
            }

      </Grid>
    );
  }



  const itemData = [
    {
      img: 'https://source.unsplash.com/random/200*300/?person',
      name: 'Ram Sharma',
      designation:'President',
    },
    {
        img: 'https://source.unsplash.com/random/200*300/?sister',
        name: 'Rama Sharma',
        designation:'Vice president',
      },
      {
        img: 'https://source.unsplash.com/random/200*300/?southasian',
        name: 'Ramesh Sharma',
        designation:'Secretary',
      },
      {
        img: 'https://source.unsplash.com/random/200*300/?brother',
        name: 'Ramash Sharma',
        designation:'Vice secretary',
      },
      {
        img: 'https://source.unsplash.com/random/200*300/?candid',
        name: 'Ramesh Sharma',
        designation:'Treasury',
      },
      {
        img: 'https://source.unsplash.com/random/200*300/?gentleman',
        name: 'Ramesh Sharma',
        designation:'Member',
      },
      {
        img: 'https://source.unsplash.com/random/200*300/?boy',
        name: 'Ramesh Sharma',
        designation:'Member',
      },
      {
        img: 'https://source.unsplash.com/random/200*300/?gentleman',
        name: 'Ramesh Sharma',
        designation:'Member',
      },
]