import React, {useState, useEffect} from 'react';
import { Select, MenuItem, Button, Grid, Typography, InputLabel } from  '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import FormInput from './CustomTextField';

import { commerce } from '../../lib/Commerce';

const AddressForm = ({checkoutToken}) => {
const [shippingCountries, setShippingCountries] = useState([]);
const [shippingCounty, setShippingCounty] = useState('');
const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
const [shippingSubdivision, setShippingSubdivision] = useState('');
const [shippingOptions, setShippingOptions] = useState([]);
const [shippingOption, setShippingOption] = useState('');


    const methods = useForm();


   const fetchShippingCountries =  async(checkoutTokenId) =>{
          const {countries} = await commerce.services.localeListCountries(checkoutTokenId);

          setShippingCountries(countries);
   }
       
useEffect(() =>{
fetchShippingCountries(checkoutToken.id);
},[]);

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
         <Select vallue={''} fullWidth onChange={' '}>
             <MenuItem key={''} value={''}>
             Nairobi
             </MenuItem>
         </Select>
      </Grid>
      <Grid item xs={12} sm={6}>
         <InputLabel>Shipping Subdivision</InputLabel>
         <Select vallue={''} fullWidth onChange={' '}>
             <MenuItem key={''} value={''}>
             Nairobi
             </MenuItem>
         </Select>
      </Grid>
      <Grid item xs={12} sm={6}>
         <InputLabel>Shipping Options</InputLabel>
         <Select vallue={''} fullWidth onChange={' '}>
             <MenuItem key={''} value={''}>
             Nairobi
             </MenuItem>
         </Select>
      </Grid>
      
      </Grid>
       </form>
     </FormProvider>
        </>
    );
}

export default AddressForm;
