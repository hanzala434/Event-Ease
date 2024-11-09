import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'
import {getSingleVendor,reset} from '../features/vendor/vendorSlice'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import {createBooking} from '../features/booking/bookingSlice'

const BookingForm = () => {
  const {id}=useParams();
  const navigate=useNavigate();

  const [formData,setFormData]=useState({
    name:'',
    phone:'',
    time:'Morning',
    type:'Wedding',
    city:'',
    additional:'',
  })
const {name,phone,type,time,city,additional}=formData

const dispatch=useDispatch()
dispatch(getSingleVendor(id))

const onSubmit=e=>{
    e.preventDefault()
    dispatch(createBooking(formData))
    setFormData({
      name:'',
      phone:'',
      time:'',
      type:'',
      city:'',
      additional:'',
      });

   navigate('/thank-u');
}

const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };


  return (
   <>
  <section className='mt-16 ml-4'>
    <form onSubmit={onSubmit}>
        <div className='form-group'>
            <label>Name</label>
            <input type="text" name='name' value={name} 
            onChange={onChange}/>
        </div>

        <div className='form-group'>
            <label >Phone Number</label>
            <input type="text" name='phone' value={phone} 
            onChange={onChange}/>
        </div>

        <div className='form-group'>
        <label htmlFor="time">Event Time</label>
          <select id="time" name="time" value={time}
          onChange={onChange}>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
         
          </select>
        </div>

        <div className='form-group'>
        <label htmlFor="type">Event Type</label>
          <select id="type" name="type" value={type}
          onChange={onChange}>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Coorporate">Coorporate</option>

         
          </select>
        </div>

        <div className='form-group'>
            <label>City</label>
            <input type="text" name='city' value={city} 
            onChange={onChange}/>
        </div>

        <div className='form-group'>
            <label>Additional Info.</label>
            <input type="text" name='additional' value={additional} 
            onChange={onChange}/>
        </div>

        <div className="form-group">
            <button className="btn btn-block" type='submit'>
                Confirm</button>
        </div>
    </form>
 </section>
   </>
  );
}

export default BookingForm
