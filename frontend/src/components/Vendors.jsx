import React from 'react'
import logo from '../assets/images/logo.PNG'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getVendor,reset } from '../features/vendor/vendorSlice';
import {useEffect} from 'react';
import VendorItem from './VendorItem'

const Vendors = () => { 
  const dispatch = useDispatch();


  const { vendor,isError, message } = useSelector((state) =>
    state.vendor,
    
  );
  
 
  useEffect(() => {
    if (isError) {
      console.log(message);
      
    }
    dispatch(getVendor());

    return () => {
      dispatch(reset())
    }
    
  }, [isError, message, dispatch]
);

  return (
  <>
  <section className='mt-16'>
    <div className='flex flex-col items-center'>
    {vendor.length > 0 ? (
          <div className='flex flex-wrap '>
            {vendor.map((vendor) => (
              <VendorItem key={vendor._id} vendor={vendor} />
            ))}
          </div>
        ) : (
          <h3>Vendors Loading Failed</h3>
        )}
    </div>
  </section>
  </>
  )
}

export default Vendors
