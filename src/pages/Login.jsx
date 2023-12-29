import React, { useEffect, useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, CssBaseline, Box, LinearProgress,} from '@mui/material';

import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, reset } from '../features/auth/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import sound from "../assets/s.mp3"
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const [audio] = useState(new Audio(sound)); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };
  
useEffect(() => {

  if ( isError || message) {
    if (isError && message) {
      toast.error("Please enter correct email and password");
    } else {
      toast.error("Something went wrong");
    }
   
    dispatch(reset());
    return; 
  }

  if (user && isSuccess) {
    navigate("/");
  }
}, [user, isLoading, isError, isSuccess, message, dispatch, navigate]);
const playClickSound = () => {
  audio.currentTime = 0;
  audio.play();
};
if(isLoading){
  return(
     <Box className='error-container'>
      <Typography className='loading-text' variant='h3'>Loading....</Typography>
      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="error" />
     
    </Stack>
     </Box>
  )
}

  return (
    <Box component="main" className='containers'>
      <CssBaseline />
      <Card className='cards'>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom className='fadeInUp login-text'>
            Log In
          </Typography>
          <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
            <TextField
              label="Email"
              name="email"
              value={email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              margin="normal"
              required
              onClick={()=>{
                playClickSound()
              }}
              InputProps={{ style: { backgroundColor: '#fff' } }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={password}
              variant="outlined"
              margin="normal"
              autoComplete="password"
              onChange={handleChange}
              fullWidth
              required
              onClick={()=>{
                playClickSound()
              }}
              InputProps={{ style: { backgroundColor: '#fff' } }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              className='fadeIn buttons'
              onClick={()=>{
                playClickSound()
              }}
            >
              Log In
            </Button>
          </form>
          <Typography variant="body2" style={{ marginTop: 20, color: '#fff' }} className='fadeIn'>
            Don't have an account? <Link to={"/signup"} style={{ color: '#e3e3e3', fontWeight: 'bold' }}>Sign up</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
