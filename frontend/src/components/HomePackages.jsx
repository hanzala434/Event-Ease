import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSinglePackages } from '../features/packages/packagesSlice';

const HomePackages = ({packages}) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleClick=()=>{
    console.log(packages._id);
    navigate(`/packages/${packages._id}`)
    dispatch(getSinglePackages(packages._id))
  }
  return (
    <> 
    <section className='flex'>
      <div className='group rounded flex flex-col justify-center m-4 items-center p-4 border-1'>
    <MDBCard className="rounded-lg shadow-lg overflow-hidden  ">
      <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay relative ">
        <MDBCardImage
          src={packages.image}
          fluid
          alt="Nature image"
          className="w-full h-auto"
        />
        <a>
          <div className="absolute inset-0 bg-white/15"></div>
        </a>
      </MDBRipple>
      <MDBCardBody className="p-6 text-center">
        <MDBCardTitle className="text-xl font-bold mb-2">{packages.name}</MDBCardTitle>
        <MDBCardText className="text-gray-700 mb-4">
{packages.services}        </MDBCardText>
<MDBCardText className="text-gray-700 mb-4">
From: {packages.vendorName}        </MDBCardText>
        <button onClick={handleClick} className="bg-red-950 text-slate-50 rounded-md px-4 py-2 hover:bg-slate-50 hover:text-red-950 border-red-950 border-2">
          Discover More
        </button>
      </MDBCardBody>
    </MDBCard>
   </div>
  </section>
  
    </>
  )
}

export default HomePackages
