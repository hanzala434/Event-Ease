import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {createServices,reset} from '../features/service/serviceSlice'
import { useParams } from 'react-router-dom';
import {getVendor} from '../features/vendor/vendorSlice'


const ServicesFrom = () => {

    const [formData,setFormData]=useState({
        name:'',
        description:'',
        image:'',
        price:'',
     })
  const {name,description,image,price}=formData
 
  const dispatch=useDispatch()

 
     const onSubmit=e=>{
         e.preventDefault()
         dispatch(createServices(formData))
         setFormData({
            name:'',
            description:'',
            image:'',
            price:'',
           });
     }

    
 
 const onChange = (e) => {
         setFormData((prevData) => ({
           ...prevData,
           [e.target.name]: e.target.value,
         }));
       };
 
    //    const handleFileChange = (event) => {
    //      if (event.target.files.length > 0) {
    //          setFormData(event.target.files[0].name);
    //      }
    //  };
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
            <label >Description</label>
            <input type="text" name='description' value={description} 
            onChange={onChange}/>
        </div>

        <div className='form-group'>
            <label>price</label>
            <input type="text" name='price' value={price} 
            onChange={onChange}/>
        </div>

        <div className='form-group'>
            <label>image</label>
            <input type="text"  name="image" value={image} 
            onChange={onChange}/>
        </div>

        <div className="form-group">
            <button className="btn btn-block" type='submit'>
                Add Service</button>
        </div>
    </form>
 </section>
</>
  )
}

export default ServicesFrom
