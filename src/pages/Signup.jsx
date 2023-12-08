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
            <Typography variant='h4' color="white">Loading...</Typography>
        )
    }
    
  return (
  <Box className="box" sx={{ display:"flex", alignItems:"center", justifyContent:"end", borderRadius:"5px", }} >
   
   
     <Box  className="login" onSubmit={handleSubmit} sx={{width:"100%",  padding:"15px", border: '1px solid grey',
      boxShadow:"2px 5px 39px 0px rgba(0,0,0,0.75)"}} > <form action="submit">
        
        <Typography className='login-text' variant="h3" align="center" sx={{fontFamily:"philosofer"}} gutterBottom>
        Sign-up
      </Typography>
    <TextField
      label="name"
      name="name"
      value={name}
      onChange={handleChange}
      fullWidth
      variant="filled"
      required
      InputProps={{ style: { color: 'white' } }}
      InputLabelProps={{
        style: { color: 'white' },
      }}
      
    />
    <TextField
      label="Email"
      name="email"
      value={email}
      onChange={handleChange}
      fullWidth
      variant="filled"
      required
      InputProps={{ style: { color: 'white' } }}
      InputLabelProps={{
        style: { color: 'white' },
      }}
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
      variant="filled"
      required
      InputProps={{ style: { color: 'white' } }}
      InputLabelProps={{
        style: { color: 'white' },
      }}
      sx={{marginTop:"15px"}}
    />
    <TextField
      label="Confirm Password"
      name="confirmPassword"
      type="password"
      value={confirmPassword}
      onChange={handleChange}
      fullWidth
      variant="filled"
      required
      InputProps={{ style: { color: 'white' } }}
      InputLabelProps={{
        style: { color: 'white' },
      }}
      autoComplete='confirm-password'
      sx={{marginTop:"15px"}}
    />
    <Button sx={{marginTop:"15px"}} type="submit" variant="contained" color="primary">
      Sign Up
    </Button> </form>
    <ToastContainer/>
  </Box>
  </Box>
  

  );
}

export default Signup
