import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, reset } from '../features/auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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
if(user || isSuccess){
navigate("/")
}
if(isError|| message){
    toast.error(message)
}
dispatch(reset)
    },[user, isLoading, isError,  isSuccess, message])
    if(isLoading){
        return(
            <Typography variant='h4'>Loading...</Typography>
        )
    }
    
  return (
  <Container sx={{ display:"flex", alignItems:"center", justifyContent:"end", bgcolor:"white", height:"50%", width:"40%", opacity:"90%", borderRadius:"15px"}}>
     <Box onSubmit={handleSubmit} sx={{width:"100%"}} > <form action="submit">
        <Typography variant="h5" align="center" gutterBottom>
        Sign-up
      </Typography>
    <TextField
      label="name"
      name="name"
      value={name}
      onChange={handleChange}
      fullWidth
      required
      
    />
    <TextField
      label="Email"
      name="email"
      value={email}
      onChange={handleChange}
      fullWidth
      required
      type="email"
      sx={{marginTop:"15px"}}
    />
    <TextField
      label="Password"
      name="password"
      type="password"
      value={password}
      onChange={handleChange}
      fullWidth
      autoComplete='password'
      required
      sx={{marginTop:"15px"}}
    />
    <TextField
      label="Confirm Password"
      name="confirmPassword"
      type="password"
      value={confirmPassword}
      onChange={handleChange}
      fullWidth
      required
      autoComplete='confirm-password'
      sx={{marginTop:"15px"}}
    />
    <Button sx={{marginTop:"15px"}} type="submit" variant="contained" color="primary">
      Sign Up
    </Button> </form>
    <ToastContainer/>
  </Box>
  </Container>
  );
}

export default Signup
