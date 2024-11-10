import React from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import SetupBudget from '../components/SetupBudget'
import HomePackages from '../components/HomePackages'
import { useSelector, useDispatch } from 'react-redux';
import { getVendor,reset } from '../features/vendor/vendorSlice';
import { getAllPackages } from '../features/packages/packagesSlice';
import {useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import {getBooking} from '../features/booking/bookingSlice'

const HomePage = () => {
  const dispatch = useDispatch();
  

  const {packages,isError, message } = useSelector((state) =>
    state.packages,

  );


  useEffect(() => {
    if (isError) {
      console.log(message);
      
    }
    dispatch(getVendor());
    dispatch(getAllPackages());
   // dispatch(getBooking(user._id))


    return () => {
      dispatch(reset())
    }
    
  }, [isError, message, dispatch]
);
  const navigate=useNavigate()
  const {user}=useSelector((state)=>state.auth)
  useEffect(()=>{
    if(!user){
      navigate('/')
    }

  },[user,navigate])
  return (
<>
<NavBar/>
<section className='mt-16 ml-4'>
  <h1>Welcome {user && user.name}!</h1>
</section>
<Hero/>
<SetupBudget/>
      <div>
        <h1 className="text-red-700 flex justify-center">Popular Packages</h1>
        {packages.length > 0 ? (
              <div className='flex flex-wrap justify-center'>
                {packages.map((packages) => (
                  <HomePackages key={packages._id} packages={packages} />
            
                ))}
              </div>
            ) : (
              <h3>Packages Loading Failed</h3>
            )}
      </div>

</>
  )
}

export default HomePage
