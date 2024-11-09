import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import {getServices,reset} from '../features/service/serviceSlice'
import TrendingItems from './TrendingItems';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';




const TrendingPackages = ({vendor}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClick = () => {
    navigate(`/service-form/${id}`);
  }


  const { services,isError, message } = useSelector((state) =>
    state.services,
    

  )

 

  useEffect(() => {
    if (isError) {
      console.log(message);
      
    }
    dispatch(getServices());

    return () => {
      dispatch(reset())
    }
    
  }, [isError, message, dispatch]



);
  return (
  <>
  <section className='mt-16'>
  <div className='flex flex-col items-center'>
    <button onClick={handleClick}>Add Service</button>
    {services.length >0? (
          <div className='flex flex-wrap '>
            {services.map((services) => (
              <TrendingItems key={services._id} services={services} />
            ))}
          </div>
        ) : (
          <h3>No Services</h3>
        )}
    </div>
  </section>
  </>
  )
}

export default TrendingPackages
