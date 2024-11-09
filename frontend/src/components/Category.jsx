import React from 'react'
import { GiTheaterCurtains } from "react-icons/gi";
import { IoBagSharp } from "react-icons/io5";
import { IoBalloonOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Category = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate('/vendors');
  };

  return (
  <>
  <section className='mt-16'>
  <div className='flex'>
  <div onClick={handleClick1} className='group rounded bg-slate-50 border-2 border-red-950 m-4 h-60 w-full flex flex-col justify-center items-center cursor-pointer 
                 transition-colors duration-300 hover:bg-red-950 hover:text-slate-50'>
  <div className='flex flex-col items-center'>
    <GiTheaterCurtains className='text-5xl text-red-950 group-hover:text-white transition-colors duration-300'/>
    <h1 className='text-red-950 mt-4 font-bold group-hover:text-white transition-colors duration-300'>Wedding</h1>
</div>
</div>
<div onClick={handleClick1} className='group rounded bg-slate-50 border-2 border-red-950 m-4 h-60 w-full flex flex-col justify-center items-center cursor-pointer 
                 transition-colors duration-300 hover:bg-red-950 hover:text-slate-50'>
  <div className='flex flex-col items-center'>
    <IoBalloonOutline className='text-5xl text-red-950 group-hover:text-white transition-colors duration-300'/>
    <h1 className='text-red-950 mt-4 font-bold group-hover:text-white transition-colors duration-300 '>Birthdays</h1>
</div>
</div>
</div>
<div className='flex justify-center'>
<div onClick={handleClick1} className='group rounded bg-slate-50 border-2 border-red-950 m-4 h-60 w-full flex flex-col justify-center items-center cursor-pointer 
                 transition-colors duration-300 hover:bg-red-950 hover:text-slate-50'>
  <div className='flex flex-col items-center'>
    <IoBagSharp className='text-5xl text-red-950 group-hover:text-white transition-colors duration-300'/>
    <h1 className='text-red-950 mt-4 font-bold group-hover:text-white transition-colors duration-300 '>Corporate</h1>
</div>
</div>
</div>
  </section>
  </>
  )
}

export default Category
