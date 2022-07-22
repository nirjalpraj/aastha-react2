import * as React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {Grid, Typography, Box, Card, CardMedia, CardContent, CardActions, Button} from '@mui/material';

const News = () => {
    return(
        <div>
            <Header/>

            <Box style={{padding:35,background:"#FFE77AFF"}}>
                <Typography variant='h3' color="#303132" textAlign='center'>Aastha News</Typography>
            </Box>
                <Grid container spacing={4} paddingTop={5}>
                    <Grid item xs={1}/>
                    <Grid item container spacing={5} direction='column' xs={7}>
                       

                            <Grid item>
                                <Typography variant='h4' textAlign='center'>Here will be News title </Typography>
                            </Grid>

                            <Grid item style={{display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'}}>
                                <img src=" https://source.unsplash.com/700x350" alt="logo" 
                                style={{maxHeight:350, maxWidth:700, borderRadius: 5  }} />  
                            </Grid>

                            <Grid item>
                                <Typography>date</Typography>
                            </Grid>

                            <Grid item>
                                <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                 atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                                  sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum 
                                  facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
                                  impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                   Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                                    repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
                                    reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                </p>

                                <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                 atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                                  sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum 
                                  facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
                                  impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                   Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                                    repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
                                    reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                </p>

                                <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                 atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                                  sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum 
                                  facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
                                  impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                   Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                                    repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
                                    reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                </p>

                            </Grid>
                         
                        
                    </Grid>
                    <Grid item container  direction='column' xs={4}>
                        <Grid item>
                            <Typography variant='h4' textAlign='center' sx={{textDecoration: 'underline'}}>News</Typography>
                        </Grid>
                        <Grid item container spacing={3} direction='column' xs={4}>
                        <Grid item>
                            <GridFolder/>
                        </Grid>
                        </Grid>
                    </Grid>

                    
                </Grid>
            <Footer/>
        </div>
    );
}

export default News;


const GridFolder = () =>{
    return(
      <Grid container direction='column' spacing={4} paddingTop={5} >
        {itemData.map((item)=>(
          <Grid item>
            <Card  sx={{ maxWidth: 450 }} style={{ backgroundColor:'#DFF5CE' }}>

                <Grid container >
                    
                    <Grid item xs={9}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Grid container direction='row'>
                                <Grid item xs={10}>
                                    <Button size="small">Read More</Button>
                                </Grid>

                                <Grid item>
                                    <Typography variant='basic2'>
                                        {item.date}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardActions>

                    </Grid>
                </Grid>
           
              
               
            </Card>
        </Grid>
      ))
      }
      
    
      </Grid>
  
    );
  }

  const itemData = [
    {
      img: 'https://source.unsplash.com/random/200*300/?breakfast',  
      date:'2074/4/5',
      title: '17 th Annual Gernal Meeting',
    },
    {   img: 'https://source.unsplash.com/random/200*300/?night',
        date:'2074/4/5',
        title: 'Breakfast',
    },
    {   img: 'https://source.unsplash.com/random/200*300/?cars',
        date:'2074/4/5',
        title: 'Breakfast',
    },
    {   img: 'https://source.unsplash.com/random/200*300/?logo',
        date:'2074/4/5',
        title: 'Breakfast',
    },
    {   img: 'https://source.unsplash.com/random/200*300/?logo',
        date:'2074/4/5',
        title: 'Breakfast',
    },
    {   img: 'https://source.unsplash.com/random/200*300/?logo',
        date:'2074/4/5',
        title: 'Breakfast',
    }
]