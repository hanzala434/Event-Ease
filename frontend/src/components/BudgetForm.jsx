import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {createBudget} from '../features/budget/budgetSlice'


const BudgetForm = () => {

    const [formData,setFormData]=useState({
        decor:0,
        photography:0,
        venue:0,
        others:0,
    })
 const {decor,photography,venue,others}=formData

 const dispatch=useDispatch()

    const onSubmit=e=>{
        e.preventDefault()
        dispatch(createBudget(formData))
        setFormData({
            decor: 0,
            photography: 0,
            venue: 0,
            others: 0,
          });
    }

const onChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };
  return (
 <>
 <section className='mt-16 ml-4 m-2 p-4'>
    <form onSubmit={onSubmit}>
        <div className='form-group'>
            <label>Decor</label>
            <input type="number" name='decor' value={decor} 
            onChange={onChange}/>
        </div>

        <div className='form-group'>
            <label >Photography</label>
            <input type="number" name='photography' value={photography} 
            onChange={onChange}/>
        </div>

        <div className='form-group'>
            <label>Venue</label>
            <input type="number" name='venue' value={venue} 
            onChange={onChange}/>
        </div>

        <div className='form-group'>
            <label>Others</label>
            <input type="number" name='others' value={others} 
            onChange={onChange}/>
        </div>

        <div className='flex justify-center p-2 '>
                <button type="submit" className='flex justify-center p-2 bg-red-900 w-40 hover:bg-red-700 text-white rounded-full'>Add New</button>
            </div>
    </form>
 </section>
 </>
  )
}

export default BudgetForm
