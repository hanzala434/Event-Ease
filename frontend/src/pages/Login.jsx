import React from 'react'
import {useState,useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux'
import { login,reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import NavBar from '../components/NavBar'

function Login() {
    const [formData,setFormData]=useState({
     
        email:'',
        password:'',
       
    })

    const {email,password}=formData

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
        const useData={
            email,
            password,
        }
        dispatch(login(useData))
    }

    if(isLoading){
        return <Spinner/>
    }

  return (
    <>
    <NavBar/>
    <section className='mt-16 p-4'>
    <div className='m-auto lg:w-96 sm:w-80'>
        <h1 className='flex justify-center'>
            <FaSignInAlt className='mx-2'/> Login
        </h1>
        <p className='flex justify-center'>Please Login to Your Account</p>
   
        <form onSubmit={onSubmit}>
            <div className='m-2'>
            <input type='text' className='form-control' 
            id="email" name="email" value={email} placeholder='Enter Your Email' onChange={onChange}/>
            </div>

            <div className='m-2'>
            <input type='password' className='form-control' 
            id="password" name="password" value={password} placeholder='Enter Your Password' onChange={onChange}/>
            </div>

            <div className='flex justify-center p-2 '>
                <button type="submit" className='flex justify-center p-2 bg-red-900 w-40 hover:bg-red-700 text-white rounded-full'>Submit</button>
            </div>
        </form>
        </div>
    </section>
    </>
  )
}

export default Login
