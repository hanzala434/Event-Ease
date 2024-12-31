import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import { register,reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import NavBar from '../components/NavBar'

function Register() {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:'',
    })

    const {name,email,password,password2}=formData
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>state.auth)
    
    useEffect(()=>{
        if(isError)
          {  
            toast.error(message)
          }
        
        if(isSuccess||user)
          {
              navigate('/')
            }

       dispatch(reset())
        
    },[user,isError,isSuccess,message,navigate,dispatch])

    const onChange=(e)=>{
        setFormData((prevState)=>({
           ...prevState,
           [e.target.name]:e.target.value,
        }))
    }
    const onSubmit=(e)=>{
        e.preventDefault()

        if(password!==password2){
            toast.error('Passwords do not match')
        }else{
            const userData={
                name,
                email,
                password
            }
            dispatch(register(userData))
        }
    }

    if(isLoading){
        return <Spinner/>
    }
  return (
    <>
    <NavBar/>
    <section className='mt-16 m-2 p-4'>
        <h1>
            <FaUser/> Register
        </h1>
        <p>Please Create Your Account</p>
    

    
        <form onSubmit={onSubmit}>
            <div>
            <input type='text' className='form-control m-2' 
            id="name" name="name" value={name} placeholder='Enter Your Name' onChange={onChange}/>
            </div>

            <div>
            <input type='text' className='form-control m-2' 
            id="email" name="email" value={email} placeholder='Enter Your Email' onChange={onChange}/>
            </div>

            <div>
            <input type='password' className='form-control m-2' 
            id="password" name="password" value={password} placeholder='Enter Your Password' onChange={onChange}/>
            </div>

            <div>
            <input type='password' className='form-control m-2' 
            id="password2" name="password2" value={password2} placeholder='Conform Your Password' onChange={onChange}/>
            </div>
            <div className='btn bg-black rounded-full flex justify-center  text-white'>
                <button type="submit" >Submit</button>
            </div>

        </form>
    </section>
    </>
  )
}

export default Register
