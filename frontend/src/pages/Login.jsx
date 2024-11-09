import React from 'react'
import {useState,useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux'
import { login,reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

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
    <section>
        <h1>
            <FaSignInAlt/> Login
        </h1>
        <p>Please Login to Your Account</p>
    </section>

    <section>
        <form onSubmit={onSubmit}>
            <div>
            <input type='text' className='form-control' 
            id="email" name="email" value={email} placeholder='Enter Your Email' onChange={onChange}/>
            </div>

            <div>
            <input type='password' className='form-control' 
            id="password" name="password" value={password} placeholder='Enter Your Password' onChange={onChange}/>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </section>
    </>
  )
}

export default Login
