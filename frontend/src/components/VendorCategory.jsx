import React from 'react'
import { GiVineFlower,GiGreekTemple  } from "react-icons/gi";
import { FaCamera } from "react-icons/fa";
import { CiSpeaker } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';



const VendorCategory = () => {
    const navigate=useNavigate()
    const handleClick1=()=>{
    
        navigate('/vendors')
    }
    
  return (
   <>
   <section className='mt-16'>
         <div className='m-2 p-2 flex flex-col md:flex-row items-center justify-center h-auto md:h-80'>
          <div onClick={handleClick1} className='group rounded bg-slate-50 border-2 border-red-950 m-4 h-60 w-full flex flex-col justify-center items-center cursor-pointer 
                         transition-colors duration-300 hover:bg-red-950 hover:text-slate-50'>
          <div className='flex flex-col items-center'>
            <GiVineFlower  className='text-5xl text-red-950 group-hover:text-white transition-colors duration-300'/>
            <h1 className='text-red-950 mt-4 font-bold group-hover:text-white transition-colors duration-300'>Decor</h1>
        </div>
        </div>
        <div onClick={handleClick1} className='group rounded bg-slate-50 border-2 border-red-950 m-4 h-60 w-full flex flex-col justify-center items-center cursor-pointer 
                         transition-colors duration-300 hover:bg-red-950 hover:text-slate-50'>
          <div className='flex flex-col items-center'>
            <FaCamera className='text-5xl text-red-950 group-hover:text-white transition-colors duration-300'/>
            <h1 className='text-red-950 mt-4 font-bold group-hover:text-white transition-colors duration-300 '>Photography</h1>
        </div>
        </div>
        </div>
        <div className='m-2 p-2 flex flex-col md:flex-row items-center justify-center h-auto md:h-80'>
        <div onClick={handleClick1} className='group rounded bg-slate-50 border-2 border-red-950 m-4 h-60 w-full flex flex-col justify-center items-center cursor-pointer 
                         transition-colors duration-300 hover:bg-red-950 hover:text-slate-50'>
          <div className='flex flex-col items-center'>
            <GiGreekTemple className='text-5xl text-red-950 group-hover:text-white transition-colors duration-300'/>
            <h1 className='text-red-950 mt-4 font-bold group-hover:text-white transition-colors duration-300 '>Venue</h1>
        </div>
        </div>

        <div onClick={handleClick1} className='group rounded bg-slate-50 border-2 border-red-950 m-4 h-60 w-full flex flex-col justify-center items-center cursor-pointer 
                         transition-colors duration-300 hover:bg-red-950 hover:text-slate-50'>
          <div className='flex flex-col items-center'>
            <CiSpeaker className='text-5xl text-red-950 group-hover:text-white transition-colors duration-300'/>
            <h1 className='text-red-950 mt-4 font-bold group-hover:text-white transition-colors duration-300 '>Others</h1>
        </div>
        </div>
        </div>
   </section>
   </>
  )
}

export default VendorCategory
