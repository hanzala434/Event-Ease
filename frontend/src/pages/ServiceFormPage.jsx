import React from 'react'
import ServicesFrom from '../components/ServicesFrom'
import NavBar from '../components/NavBar'
import { useSelector, useDispatch } from 'react-redux';
import { getSingleVendor,reset } from '../features/vendor/vendorSlice';
import {useEffect} from 'react';


const ServiceFormPage = () => {

  return (
<>
<NavBar/>
<ServicesFrom/>
</>
  )
}

export default ServiceFormPage
