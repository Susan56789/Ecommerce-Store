import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import makeStyles from './style';
import logo from "../assets/logo.jpg";


const Navbar = () => {
    const classes = makeStyles();

    return (
        <>
          <AppBar position='relative' className={classes.appBar} color='inherit'>
             <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                   <img src={logo} alt='Commerce Store' height={'25px'} className={classes.image}/> 
                Commerce Store
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
<IconButton aria-label='Show cart items' color='inherit'>
<Badge badgeContent={2} color='secondary'>
    <ShoppingCart />
</Badge>
</IconButton>
                </div>
                </Toolbar> 
              
        </AppBar>  
        </>
    );
}

export default Navbar;
