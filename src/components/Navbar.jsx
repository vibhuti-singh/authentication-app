import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutuser } from '../features/auth/authSlice';

const Navbar = () => {
    const dispatch = useDispatch()
const{user} = useSelector(state=>state.auth)
const handleLogout = ()=>{
dispatch(logoutuser())
}
    return (
      <AppBar className='nav-bar'>
        <Toolbar className='nav-bar'>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Authentication app
          </Typography>
         {
            !user ? (
                <>
               
          
                </>
            ):(
             <>
              <Link to={'/'}> <Button variant='contained' color='secondary' sx={{marginRight:"10px"}}>
              Home
            </Button></Link>
                <Button variant='contained' color='error' onClick={handleLogout}>Logout</Button>
             </>
            )
         }
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;
  
