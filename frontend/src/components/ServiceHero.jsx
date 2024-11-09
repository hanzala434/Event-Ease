import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSingleVendor,reset } from '../features/vendor/vendorSlice';
import {useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { getServices } from '../features/service/serviceSlice';
//import { getSingleServices } from '../features/service/serviceSlice';


const ServiceHero = ({singleService}) => {
  const dispatch = useDispatch();
  const {id}=useParams();
  const navigate=useNavigate()

  // const {singleService,isError, message } = useSelector((state) =>
  //   state.services,
 
  // );


const handleClick = () => {
  navigate(`/appointment/${singleService.vendor}`);
}
  return (
 <>
<div className="p-5 text-center bg-cover bg-center bg-no-repeat  h-[400px] bg-[url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')]">

<div className="mask bg-opacity-60">

    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="text-white">
        <h1 class="mb-3">{singleService.name}</h1>
        <a data-mdb-ripple-init class="btn btn-outline-light btn-lg" onClick={handleClick}  role="button">Book Now</a>
      </div>
    </div>
  </div>
</div>
 </>
  )
}

export default ServiceHero
