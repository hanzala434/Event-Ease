import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSingleVendor,reset } from '../features/vendor/vendorSlice';
import {useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { getServices } from '../features/service/serviceSlice';
import { getSingleServices } from '../features/service/serviceSlice';
import ServiceHero from './ServiceHero';
import ServiceBanner from './ServiceBanner';
import HomePackages from './HomePackages';
import {getPackages} from '../features/packages/packagesSlice'


const Service = () => {
    const dispatch = useDispatch();
    const {id}=useParams();
    console.log(id);
    const navigate = useNavigate();

    const {singleService,isError, message } = useSelector((state) =>
      state.services,

    );

    const {packages}= useSelector((state) =>
      state.packages,

    );

  
    useEffect(() => {
      if (isError) {
        console.log(message);
        
      }
     // dispatch(getSingleVendor(singleService.vendor));
      dispatch(getSingleServices(id));
      //dispatch(getPackages(singleService.vendor))

      return () => {
        dispatch(reset())
      }
      
    }, [isError, message, dispatch]
  );
  return (
<>
<section >
        {singleService && <ServiceHero key={singleService._id} singleService={singleService} />}
        
      </section>
      <section>
      {singleService && <ServiceBanner key={singleService._id} singleService={singleService} />}
      </section>
      <section>
      {singleService && <h1 key={singleService._id} singleService={singleService} >Popular Packages from {singleService.vendorName}</h1>}

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

export default Service
