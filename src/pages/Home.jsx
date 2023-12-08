
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Grid, Paper, Typography } from '@mui/material';


const Home = () => {
  const dispatch = useDispatch()
    const navigate = useNavigate()
    const{user, isLoading, isSuccess, isError, message}= useSelector(state => state.auth)
useEffect(()=>{
if(!user){
    navigate("/login")
}
},[user, isLoading, isSuccess, isError, message])


  return (
    <Container>
    <Grid container spacing={4} style={{ marginTop: '20px' }}>
      <Grid item xs={12}>
        <Paper style={{ padding: '20px', textAlign: 'center',backgroundColor:"gray",color:"white" }}>
          <Typography  gutterBottom sx={{display:"flex",justifyContent:"center"}}>
           Hello 
           <Typography variant='h4' sx={{marginLeft:"10px"}}>
            Hello
            </Typography>
            <Typography variant='h4' sx={{marginLeft:"10px"}}>
            
            </Typography>
          </Typography>
          <Typography variant="subtitle1" paragraph>
          welcome to our authentication app
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            About our auth-app
          </Typography>
          <Typography variant="body2" paragraph>
            why we need authentication
          </Typography>
          <Button variant="outlined" color="primary">
            View Details
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Technologies i use
          </Typography>
          <Typography variant="body2" paragraph>
            Discover the latest technology used in this App
          </Typography>
          <Button variant="outlined" color="primary">
            View Details
          </Button>
        </Paper>
      </Grid>
    </Grid>
  </Container>
  );
}
  


export default Home
