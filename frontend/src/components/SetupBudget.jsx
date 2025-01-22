import React from 'react'
import { Container,Row,Col,Image, Button } from 'react-bootstrap'
import logo from '../assets/images/logo.PNG'
import { FaCalculator } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const SetupBudget = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate('/setup-budget');
  };
  const handleClick2 = () => {
    navigate('/contact-us');
  };

  return (
 <>
<section>
  <h1 className="text-center text-2xl text-red-700 font-bold p-2">Inline Your Budget</h1>
  <div className="m-2 p-2 flex flex-col md:flex-row items-center justify-center h-auto md:h-80">

    {/* Setup Budget Card */}
    <div
      onClick={handleClick1}
      className="group rounded bg-slate-50 border-2 border-red-950 m-4 h-60 w-full flex flex-col justify-center items-center cursor-pointer 
                 transition-colors duration-300 hover:bg-red-950 hover:text-white "
    >
      <FaCalculator className="text-5xl text-red-950 group-hover:text-white transition-colors duration-300 " />
      <h1 className="text-red-950 mt-4 font-bold group-hover:text-white transition-colors duration-300">Setup Budget</h1>
    </div>

    {/* Contact Us Card */}
    <div
      onClick={handleClick2}
      className="group rounded bg-slate-50 border-2 border-red-950 m-4 h-60 w-full flex flex-col justify-center items-center cursor-pointer 
                 transition-colors duration-300 hover:bg-red-950 hover:text-white"
    >
      <IoIosContact className="text-5xl text-red-950 group-hover:text-white transition-colors duration-300" />
      <h1 className="text-red-950 mt-4 font-bold group-hover:text-white transition-colors duration-300">Contact Us</h1>
    </div>

  </div>
</section>


 </>
  )
}

export default SetupBudget
