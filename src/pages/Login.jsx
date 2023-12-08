import React, { useEffect, useState } from 'react';
import { TextField, Button, Paper, Typography, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth);

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
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate('/');
    }
  }, [user, isError, isLoading, isSuccess, message]);

  return (
    <Container maxWidth="xs">
      <Paper
        className="login"
        elevation={3}
        style={{
          padding: 20,
          marginTop: 40,
          border: '1px solid grey',
      boxShadow:"2px 5px 39px 0px rgba(0,0,0,0.75)"
        }}
      >
        <Typography
          className="login-text"
          variant="h2"
          align="center"
          style={{ fontFamily: 'Philosopher' ,}}
        >
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
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
          style={{ marginTop: '10px' }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={password}
            variant="filled"
            autoComplete="password"
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
            onChange={handleChange}
            fullWidth
            required
           
            style={{ marginTop: '10px' }}
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
  );
};

export default Login;
