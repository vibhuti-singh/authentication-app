import { Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



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
    <Typography variant="h1" color="initial">this is home page</Typography>
   </Container>
  );
}
  


export default Home
