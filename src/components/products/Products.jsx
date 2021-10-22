import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import makeStyles from '../products/Product/styles';

const Products = ({products}) =>{
    const classes = makeStyles();
    return(
<main className={classes.content}>
    <div className={classes.toolbar}/>
    <Grid container justify='center' spacing={4}>
{products.map((product)=>{
    return(
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        <Product  product={product}/>
        </Grid>
    )
})}
    </Grid>
</main>
    );
}

export default Products;