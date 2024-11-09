import React from 'react'

import { useNavigate } from 'react-router-dom';



const VendorItem = ({vendor}) => {

  const navigate=useNavigate();

  

  const handleVendorClick = async () => {


    // Navigate to the vendor profile page
    navigate(`/vendor-profile/${vendor._id}`);
  };
  return (
    <div>
     <div onClick={handleVendorClick}>
        <div className=" bg-red-700 rounded p-2 m-4 object-cover">
            <img className='rounded p-4 w-96 h-64 object-cover' src={vendor.profile}/>
            <h1 className='text-2xl text-white flex justify-center'>{vendor.name}</h1>
            <p className='text-white flex justify-center'>{vendor.category}</p>
        </div>
        </div>
    </div>
  )
}

export default VendorItem
