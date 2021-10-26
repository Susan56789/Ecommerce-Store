import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Backend
import { commerce } from './lib/Commerce';

import {Products, Navbar,Cart, Checkout} from './components';


const App = () =>{
  const [products, setProducts] =useState([]);
 const [cart, setCart] =useState([]);


  const fetchProducts = async () =>{
const {data} = await commerce.products.list();

setProducts(data);
  };

const fetchCart = async () =>{
  const cart = await commerce.cart.retrieve();

  setCart(cart);
}

const handleAddToCart = async (productId, quantity) =>{
const {cart} = await commerce.cart.add(productId, quantity);

setCart(cart);
}

const handleUpdateCart = async (productId, quantity) =>{
const {cart} = await commerce.cart.update(productId, {quantity});

setCart(cart);
}

const handleRemoveFromCart = async (productId) =>{
const {cart} = await commerce.cart.remove(productId);

setCart(cart);
}

const handleEmptyCart = async () =>{
  const {cart} = await commerce.cart.empty();
  setCart(cart);
}

  useEffect(()=>{
fetchProducts();
fetchCart();
  },[]);


  

  return (
  <Router>
    <div >
      <Navbar totalItems={cart.total_items}/>

      <Switch>
        <Route exact path="/">
        <Products products={products} onAddToCart={handleAddToCart}/>
        </Route>
        <Route exact path="/cart">
        <Cart 
        cart={cart} 
        handleEmptyCart ={handleEmptyCart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleUpdateCart = {handleUpdateCart}
        />
        </Route>
<Route exact path='/checkout'>
<Checkout />
</Route>
      </Switch>
    </div>

  </Router>
  );
}

export default App;
