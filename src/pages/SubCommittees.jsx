import { Box , Grid, Typography, Card, Button} from '@mui/material';
import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SubCommittees = () => {
    const loan = React.useRef(null);
    const woman = React.useRef(null);
    const education = React.useRef(null);
    const health = React.useRef(null);


    const handleClick1 = () => {
        loan.current.scrollIntoView({ behavior: "smooth" });
      };
    
      const handleClick2 = () => {
        woman.current.scrollIntoView({ behavior: "smooth" });
      };

      const handleClick3 = () => {
        education.current.scrollIntoView({ behavior: "smooth" });
      };

      const handleClick4 = () => {
        health.current.scrollIntoView({ behavior: "smooth" });
      };

    return(
        <div>
            <Header/>
            
            <Grid container paddingTop={10} direction='column'>

               
                <Grid item container paddingTop={10}>
                    <Grid item xs={1}/>
                    <Grid item container direction='column' spacing={10} xs={8}>
                        <Grid item container direction='column' spacing={10} xs={12}>
                            <Grid item>
                                <Typography ref={loan} variant='h4' style={{textAlign: 'center'}}>Loan Subcommittee</Typography>
                            </Grid>
                            
                            <Grid item>
                                <GridFolder/>
                            </Grid>
                        </Grid>
                    </Grid>
            
                  
                    <Grid container direction='column' item xs={3}>

                            <Box  marginTop={10} >
                            <Button  variant="outlined" color="success" onClick={handleClick2}>Woman Subcommittee </Button>
                            </Box>

                            <Box  marginTop={5}>
                            <Button  variant="outlined" color="success" onClick={handleClick3}>Education Subcommittee </Button>
                            </Box>

                            <Box marginTop={5}>
                            <Button  variant="outlined" color="success" onClick={handleClick4}>Health Subcommittee </Button>
                            </Box>

                    </Grid>
                  
                </Grid>
              
                
                
                <Grid item container paddingTop={10}>
                    <Grid item xs={1}/>
                    <Grid item container direction='column' spacing={10} xs={8}>
                        <Grid item container direction='column' spacing={10} xs={12}>
                            <Grid item>
                                <Typography ref={woman} variant='h4' style={{textAlign: 'center'}}>Woman Subcommittee</Typography>
                            </Grid>
                            
                            <Grid item>
                                <GridFolder/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction='column' item xs={3}>

                            <Box marginTop={10}>
                            <Button  variant="outlined" color="success" onClick={handleClick1}>Loan Subcommittee </Button>
                            </Box>

                            <Box marginTop={5}>
                            <Button  variant="outlined" color="success" onClick={handleClick3}>Education Subcommittee </Button>
                            </Box>

                            <Box marginTop={5}>
                            <Button  variant="outlined" color="success" onClick={handleClick4}>Health Subcommittee </Button>
                            </Box>

                    </Grid>
                    
                </Grid>
     

                <Grid item container paddingTop={10}>
                    <Grid item xs={1}/>
                    <Grid item container direction='column' spacing={10} xs={8}>
                        <Grid item container direction='column' spacing={10} xs={12}>
                            <Grid item>
                                <Typography  ref={education}variant='h4' style={{textAlign: 'center'}}>Education Subcommittee</Typography>
                            </Grid>
                            
                            <Grid item>
                                <GridFolder/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction='column' item xs={3}>

                            <Box marginTop={10}>
                            <Button  variant="outlined" color="success" onClick={handleClick1}>Loan Subcommittee </Button>
                            </Box>

                            <Box marginTop={5}>
                            <Button  variant="outlined" color="success" onClick={handleClick2}>Woman Subcommittee </Button>
                            </Box>

                            <Box marginTop={5}>
                            <Button  variant="outlined" color="success" onClick={handleClick4}>Health Subcommittee </Button>
                            </Box>

                    </Grid>

                </Grid>

                <Grid item container paddingTop={10}>
                    <Grid item xs={1}/>
                    <Grid item container direction='column' spacing={10} xs={8}>
                        <Grid item container direction='column' spacing={10} xs={12}>
                            <Grid item>
                                <Typography  ref={health} variant='h4' style={{textAlign: 'center'}}>Health Subcommittee</Typography>
                            </Grid>
                            
                            <Grid item>
                                <GridFolder/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction='column' item xs={3}>

                            <Box marginTop={10}>
                            <Button  variant="outlined" color="success" onClick={handleClick1}>Loan Subcommittee </Button>
                            </Box>

                            <Box marginTop={5}>
                            <Button  variant="outlined" color="success" onClick={handleClick2}>Woman Subcommittee </Button>
                            </Box>

                            <Box marginTop={5}>
                            <Button  variant="outlined" color="success" onClick={handleClick3}>Education Subcommittee </Button>
                            </Box>

                    </Grid>

                </Grid>

            </Grid>
            <Footer/>
            </div>
    );
}

export default SubCommittees;


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
        img: 'https://source.unsplash.com/random/200*300/?gentleman',
        name: 'Ramesh Sharma',
        designation:'Member',
      },
      {
        img: 'https://source.unsplash.com/random/200*300/?boy',
        name: 'Ramesh Sharma',
        designation:'Member',
      },
      
]