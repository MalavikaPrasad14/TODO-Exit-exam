import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <>
        {/* <div>Navbar</div> */}
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit" sx={{backgroundColor:"gray-dark"}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                        Routine Trackers 
                    </Typography>
                    <Button href='/home' color='inherit'>Home</Button>
                    <Button href='/add' color='inherit'>Add New</Button>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar

