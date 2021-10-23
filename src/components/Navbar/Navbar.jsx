import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import makeStyles from './style';
import logo from "../assets/logo.jpg";
import {Link, useLocation} from 'react-router-dom';

const Navbar = ({totalItems}) => {
    const classes = makeStyles();
const location = useLocation();


    return (
        <>
          <AppBar position='relative' className={classes.appBar} color='inherit'>
             <Toolbar>
                <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
                   <img src={logo} alt='Commerce Store' height={'25px'} className={classes.image}/> 
                Commerce Store
                </Typography>
                <div className={classes.grow}/>
                {location.pathname === '/' && (

               
                <div className={classes.button}>

<IconButton component={Link} to="/cart" aria-label='Show cart items' color='inherit'>
<Badge badgeContent={totalItems} color='secondary'>
    <ShoppingCart />
</Badge>
</IconButton>
                </div> )}
                </Toolbar> 
              
        </AppBar>  
        </>
    );
}

export default Navbar;
