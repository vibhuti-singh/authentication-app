import React, { useEffect, useState } from 'react';
import { TextField, Button, Paper, Typography, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user, isLoading, isSuccess, isError, message}= useSelector(state=>state.auth)


    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const { email, password } = formData;
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
       dispatch(loginUser(formData))
       
      };
   
    useEffect(()=>{
if(user|| isSuccess){
  navigate("/")
}
    },[user, isError, isLoading, isSuccess, message])
  return (
    <Container maxWidth="xs" sx={{ opacity:"90%"}}>
    <Paper elevation={3} style={{ padding: 20, marginTop: 40 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={password}
          autoComplete='password'
          onChange={handleChange}
          fullWidth
          required
          sx={{marginTop:"10px"}}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 20 }}
        >
          Log In
        </Button>
      </form>
    </Paper>
  </Container>
  )
}

export default Login
