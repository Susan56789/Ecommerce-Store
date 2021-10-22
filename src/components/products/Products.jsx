import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';


const products = [
{id:1, name:'shoes', description:'Running Shoes', price:'Ksh. 2000', image:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
{id:2, name:'dress', description:'Red Dress', price:'Ksh. 700', image:'https://media.istockphoto.com/photos/beautiful-young-woman-in-red-dress-picture-id1314032569?b=1&k=20&m=1314032569&s=170667a&w=0&h=VQRDKGoXA3zgBvd-xqNg-ei_lmHsPOCsOVtPXoIvy7Y='}
];

const Products = () =>{
    return(
<main>
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