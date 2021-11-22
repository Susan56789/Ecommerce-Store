import React, {useState, useEffect} from 'react';
import { Select,MenuItem, Button, Grid, Typography, InputLabel } from  '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import FormInput from './CustomTextField';


import { commerce } from '../../lib/Commerce';

const AddressForm = ({checkoutToken}) => {
const [shippingCountries, setShippingCountries] = useState([]);
const [shippingCountry, setShippingCountry] = useState('');
const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
const [shippingSubdivision, setShippingSubdivision] = useState('');
const [shippingOptions, setShippingOptions] = useState([]);
const [shippingOption, setShippingOption] = useState('');

const countries = Object.entries(shippingCountries).map(([code, name]) => ({id:code, label:name}));
const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id:code, label:name}));
const options = shippingOptions.map((so)=>({id:so.id, label: `${so.description} -(${so.price.formatted_with_symbol})`}));

 const methods = useForm();

    
    const fetchShippingCountries =  async(checkoutTokenId) =>{
          const {countries} = await commerce.services.localeListCountries(checkoutTokenId);

          setShippingCountries(countries);
          setShippingCountry(Object.keys(countries)[0]);
   }

   const fetchSubdivisions = async(countryCode)=>{
       const {subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
   
       setShippingSubdivisions(subdivisions);
       setShippingSubdivision(Object.keys(subdivisions)[0]);
    }


   const fetchShippingOptions = async(checkoutTokenId, country, region=null)=>{
       const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region});
   
       setShippingOptions(options);
       setShippingOption(options[0].id);
    }
       
useEffect(() =>{
fetchShippingCountries(checkoutToken.id);
},[checkoutToken.id]);


useEffect(()=>{
    if(shippingCountry) fetchSubdivisions(shippingCountry,shippingSubdivision);
},[shippingCountry]);

useEffect(()=>{
if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, )
},[shippingSubdivision])

    return (
        <>
    <Typography variant='h6' gutterBottom>
    Shipping Address
    </Typography>  
     <FormProvider {... methods}>
         <form onSubmit={''}>
      <Grid container spacing={3}>
         <FormInput required name='First Name' label='First Name' />
         <FormInput required name='Last Name' label='Last Name' />
         <FormInput required name='Email' label='Email' />
         <FormInput required name='Address' label='Address' />
         <FormInput required name='City' label='City' />
         <FormInput required name='Phone Number' label='Phone Number' />
      
      <Grid item xs={12} sm={6}>
         <InputLabel>Shipping Country</InputLabel>
         <Select  value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
          {countries.map((country)=>(
              <MenuItem key={country.id} value={country.id}>
              {country.label}
              </MenuItem>
          ))};
         </Select>
      </Grid>
      <Grid item xs={12} sm={6}>
         <InputLabel>Shipping Subdivision</InputLabel>
         <Select  value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
          {subdivisions.map((subdivision)=>(
              <MenuItem key={subdivision.id} value={subdivision.id}>
              {subdivision.label}
              </MenuItem> 
          ))};
         </Select>
      </Grid>
      <Grid item xs={12} sm={6}>
         <InputLabel>Shipping Options</InputLabel>
         <Select  value={shippingOption} fullWidth onChange={(e)=>setShippingOption(e.target.value)}>
         {options.map((option)=>(
              <MenuItem key={option.id} value={option.id}>
              {option.label}
              </MenuItem> 
              ))};
         </Select>
      </Grid>
      
      </Grid>
       </form>
     </FormProvider>
        </>
    );
}

export default AddressForm;
