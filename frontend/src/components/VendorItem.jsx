import React from 'react'

import { useNavigate } from 'react-router-dom';



const VendorItem = ({vendor}) => {

  const navigate=useNavigate();

  

  const handleVendorClick = async () => {


    // Navigate to the vendor profile page
    navigate(`/vendor-profile/${vendor._id}`);
  };
  return (
    <div
    className="bg-red-950 hover:bg-slate-50 border-2 text-slate-50 hover:text-red-950 border-red-50 
               rounded p-2 m-4 transition-colors duration-300 cursor-pointer"
    onClick={handleVendorClick}
  >
    <img
      className="rounded p-4 w-full h-64 object-cover"
      src={vendor.profile}
      alt={`${vendor.name}'s profile`}
    />
    <h1 className="text-2xl flex justify-center">{vendor.name}</h1>
    <p className="flex justify-center">{vendor.category}</p>
  </div>
  )
}

export default VendorItem
