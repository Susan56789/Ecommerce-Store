import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItems/CartItem';
import {Link} from 'react-router-dom';


const Cart = ({cart,handleEmptyCart,handleRemoveFromCart,handleUpdateCart }) => {
    const classes = useStyles();
const isEmpty = cart.line_items?.length === 0;

const EmptyCart = () =>(
<Typography variant='subtitle1'>
You have no items in your shopping cart.
<Link to='/' className={classes.link}> Start adding some</Link>!
</Typography>
);

const FilledCart =() =>(

    <>
    <Grid container spacing={3}>
{cart.line_items?.map((item) => (
<Grid item xs={12} sm={4} key={item.id}>
<CartItem item={item} 
handleRemoveFromCart={handleRemoveFromCart}
handleUpdateCart = {handleUpdateCart}
/>
</Grid>
))}
    </Grid>
    <div className={classes.cardDetails}>
<Typography variant='h4'>
subtotal: {cart.subtotal.formatted_with_symbol}
</Typography>

<div>
    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='primary' onClick={handleEmptyCart}>
        Empty Cart
    </Button>
    <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='secondary' >
        CheckOut
    </Button>
</div>

    </div>
    </>
);

//if(!cart.line_items) return 'Loading ...';


    return (
<Container>
    <div className={classes.toolbar}/>
    <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
{ isEmpty ? <EmptyCart/> : <FilledCart/> }
</Container>
    );
}

export default Cart;