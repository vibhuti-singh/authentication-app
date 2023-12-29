import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Box, LinearProgress } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, reset } from '../features/auth/authSlice';
import sound from "../assets/s.mp3"
import { toast} from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
const navigate=useNavigate()

    const {user, isLoading, isError, isSuccess, message }=useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    const {name, email, password, confirmPassword}= formData;
      
    
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
        
        if (password !== confirmPassword) {
         toast.error('Passwords do not match' );
        } else {
          dispatch(registerUser(formData))
        }
       
      };
    useEffect(()=>{

if(isError|| message){
    toast.error(message)
}
if(user || isSuccess){
  navigate("/")
  }
dispatch(reset)
    },[user, isLoading, isError,  isSuccess, message])
    
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
  <Box className="containers" >
   
   
     <Box  className="cards" onSubmit={handleSubmit} sx={{width:"50%",  padding:"15px", 
      }} > <form action="submit">
        
        <Typography className='login-text' variant="h3" align="center" sx={{fontFamily:"philosofer"}} gutterBottom>
        Sign-up
      </Typography>
    <TextField
      label="name"
      name="name"
      value={name}
      onChange={handleChange}
      fullWidth
      variant="outlined"
      required  
      InputProps={{ style: { backgroundColor: '#fff' } }}
    />
    <TextField
      label="Email"
      name="email"
      value={email}
      onChange={handleChange}
      fullWidth
      variant="outlined"
      required
      type="email"
      sx={{marginTop:"15px"}}
      
      InputProps={{ style: { backgroundColor: '#fff' } }}
    />
    <TextField
      label="Password"
      name="password"
      type="password"
      value={password}
      onChange={handleChange}
      fullWidth
      autoComplete='password'
      variant="outlined"
      required
      
      InputProps={{ style: { backgroundColor: '#fff' } }}
      sx={{marginTop:"15px"}}
    />
    <TextField
      label="Confirm Password"
      name="confirmPassword"
      type="password"
      value={confirmPassword}
      onChange={handleChange}
      fullWidth
      variant="outlined"
      required
      autoComplete='confirm-password'
      InputProps={{ style: { backgroundColor: '#fff' } }}
      sx={{marginTop:"15px"}}
    />
    <Button className='buttons' sx={{marginTop:"15px"}} type="submit" variant="contained" fullWidth style={{ marginTop: 20, fontWeight: 'bold' }} onClick={()=>{
                playClickSound()
              }}>
      Sign Up
    </Button> </form>
    <Typography variant="body2" style={{ marginTop: 20, color: '#fff' }} className='fadeIn'>
            Alredy have an account? <Link to={"/login"} style={{ color: '#e3e3e3', fontWeight: 'bold' }}>LogIn</Link>
          </Typography>
   
  </Box>
  </Box>
  

  );
}

export default Signup
