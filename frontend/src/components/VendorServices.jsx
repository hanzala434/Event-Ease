import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.PNG'

const VendorServices = () => {
  return (
  <>
  <section className='mt-4'>
    <div className='m-8'>
  <h1 className=' text-5xl m-4 flex font-bold justify-center font-sans text-red-700'>Popular Services</h1>
  </div>
  <Link to='#'>
        <div className=" bg-red-100 border-solid border-red-700 flex rounded p-2 m-4">
            <div>
            <img className='rounded p-4' src={logo}/>
            </div>
            <div className='flex flex-col'>
            <h1 className='text-4xl font-sans m-4 text-red-700'>Stage Decor</h1>
            
            <p className='text-red-700 flex justify-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque unde porro eum quas voluptates qui, voluptas ad maiores vel dolor..</p>
            </div>
        </div>
        </Link>
        <Link to='#'>
        <div className=" bg-red-100 border-solid border-red-700 flex rounded p-2 m-4">
            <div className='flex flex-col'>
            <h1 className='text-4xl font-sans m-4 text-red-700'>Outdoor Decor</h1>
            
            <p className='text-red-700 flex justify-center ml-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque unde porro eum quas voluptates qui, voluptas ad maiores vel dolor..</p>
            </div>
            <div>
            <img className='rounded p-4' src={logo}/>
            </div>
        </div>
        </Link>
        <Link to='#'>
        <div className=" bg-red-100 border-solid border-red-700 flex rounded p-2 m-4">
            <div>
            <img className='rounded p-4' src={logo}/>
            </div>
            <div className='flex flex-col'>
            <h1 className='text-4xl font-sans m-4 text-red-700'>Entry Decor</h1>
            
            <p className='text-red-700 flex justify-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque unde porro eum quas voluptates qui, voluptas ad maiores vel dolor..</p>
            </div>
        </div>
        </Link>

        <Link to='#'>
        <div className=" bg-red-100 border-solid border-red-700 flex rounded p-2 m-4">
            <div className='flex flex-col'>
            <h1 className='text-4xl font-sans m-4 text-red-700'>Indoor Decor</h1>
            
            <p className='text-red-700 flex justify-center ml-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque unde porro eum quas voluptates qui, voluptas ad maiores vel dolor..</p>
            </div>
            <div>
            <img className='rounded p-4' src={logo}/>
            </div>
        </div>
        </Link>
  </section>
  </> 
  )
}

export default VendorServices
