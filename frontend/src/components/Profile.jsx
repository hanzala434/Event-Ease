import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSingleVendor,reset } from '../features/vendor/vendorSlice';
import {useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { getServices } from '../features/service/serviceSlice';
import ServicesFrom from './ServicesFrom';
import TrendingItems from './TrendingItems';
import GetAppointment from './GetAppointment'
import { getPackages } from '../features/packages/packagesSlice';
import HomePackages from './HomePackages';
import getSingleServices from '../features/service/serviceSlice'

const Profile = () => {
    const dispatch = useDispatch();
    const {id}=useParams();
    const navigate = useNavigate();

    const {services,isError, message } = useSelector((state) =>
      state.services,

    );
    const {packages}= useSelector((state) =>
      state.packages,

    );
    const {vendorSingle} = useSelector((state) =>
      state.vendor,

    );
    const { user } = useSelector((state) => state.auth);

  
    useEffect(() => {
      if (isError) {
        console.log(message);
        
      }
      dispatch(getSingleVendor(id));
      dispatch(getServices(id));
      //dispatch(getSingleServices(services._id));

      dispatch(getPackages(id))

  
      return () => {
        dispatch(reset())
      }
      
    }, [isError, message, dispatch]
  );

  const handleClick = () => {
    navigate(`/service-form/${id}`);
    
    dispatch(getSingleVendor(id));
    dispatch(getServices(id));
  }

  return (
    <>
    <section className='mt-20'>
      <div className='flex justify-center'>
      {vendorSingle && <h1 className='text-5xl text-red-950 font-bold ' key={vendorSingle._id} vendorSingle={vendorSingle}>{vendorSingle.name}</h1>}
      </div>
    </section>
    <section className='mt-16'>
    <div className='flex flex-col items-center'>
    <h1 className='text-center text-2xl text-red-700 font-bold p-2'>Trending Services/Packages</h1>
    {user && user.role === 'admin' && (
            <button onClick={handleClick}>Add Service</button>
          )}
    

        {services.length > 0 ? (
              <div className='flex flex-wrap justify-center'>
                {services.map((services) => (
                  <TrendingItems key={services._id} services={services} />
                
                ))}
              </div>
            ) : (
              <h3>Services Loading Failed</h3>
            )}
        </div>
    </section>
    <section>
    <GetAppointment/>
    </section>
    <section>

        {packages.length > 0 ? (
              <div className='flex flex-wrap justify-center'>
                {packages.map((packages) => (
                  <HomePackages key={packages._id} packages={packages} />
            
                ))}
              </div>
            ) : (
              <h3>Packages Loading Failed</h3>
            )}
  
    </section>
    </>
  )
}

export default Profile
