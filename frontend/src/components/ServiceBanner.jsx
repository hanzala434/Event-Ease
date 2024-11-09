import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import { getSingleVendor,reset } from '../features/vendor/vendorSlice';


const ServiceBanner = ({singleService}) => {


  return (
 <>
<div className="flex flex-col md:flex-row p-4">
    <div className="w-full md:w-1/2 m-2 h-80">
        <h1 className="text-5xl text-red-950 mb-4"> {singleService.name}</h1>
        <p>
           {singleService.description}
        </p>
        <h2>Estimated Price: {singleService.price}</h2>
    </div>
    <div className="w-full md:w-1/2 m-2 flex justify-center">
        <img
            src={singleService.image}
            alt="Eventia Outdoor Events"
            className="object-cover rounded-lg shadow-lg"
        />
    </div>
</div>

 </>
  )
}

export default ServiceBanner
