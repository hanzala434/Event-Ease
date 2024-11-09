import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {createVendor} from '../features/vendor/vendorSlice'

const VendorAddFrom = () => {
    const [formData,setFormData]=useState({
       name:'',
       email:'',
       phone:'',
       category:'',
       profile:'',
    })
 const {name,email,profile,category,phone}=formData

 const dispatch=useDispatch()

    const onSubmit=e=>{
        e.preventDefault()
        dispatch(createVendor(formData))
        setFormData({
            name:'',
            email:'',
            phone:'',
            category:'',
            profile:'',
          });
    }

const onChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };

    //   const handleFileChange = (event) => {
    //     if (event.target.files.length > 0) {
    //         setFormData((prevData) => ({
    //             ...prevData,
    //             profile: event.target.files[0] // Save the file object
    //         }));
    //     }
    // };
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
            <label >Email</label>
            <input type="text" name='email' value={email} 
            onChange={onChange}/>
        </div>

        <div className='form-group'>
            <label>Category</label>
            <input type="text" name='category' value={category} 
            onChange={onChange}/>
        </div>

        <div className='form-group'>
            <label>Contact Number</label>
            <input type="text" name='phone' value={phone} 
            onChange={onChange}/>
        </div>

        <div className='form-group'>
            <label>Profile (Please add image url)</label>
            <input type="text" name="profile" value={profile}
             onChange={onChange}/>
        </div>

        <div className="form-group">
            <button className="btn btn-block" type='submit'>
                Add Vendor</button>
        </div>
    </form>
 </section>
 </>
  )
}

export default VendorAddFrom
