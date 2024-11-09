import React from 'react'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { CiLocationArrow1 } from "react-icons/ci";
import {getSingleVendor,reset} from '../features/vendor/vendorSlice'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const GetAppointment = () => {
  const navigate=useNavigate();
  const {id}=useParams();



const handleVendorClick = async () => {


  // Navigate to the vendor profile page
  navigate(`/appointment/${id}`);
};
  return (
<>
<section className='m-4'>
<div className='flex justify-center'>
<div onClick={handleVendorClick} className='rounded bg-red-100 m-4 h-60 w-2/2 flex justify-center items-center'>
  <div className='flex items-center'>
   <h1 className='text-3xl text-red-700 p-4 '>Get your Appointment Now!</h1>
   <CiLocationArrow1 className='text-5xl text-red-700 m-4'/>
</div>
</div>
</div>

</section>
</>
  )
}

export default GetAppointment
