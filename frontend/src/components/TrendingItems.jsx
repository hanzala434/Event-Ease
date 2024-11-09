import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSingleVendor,reset } from '../features/vendor/vendorSlice';
import { getSingleServices } from '../features/service/serviceSlice';
import { useParams,useNavigate } from 'react-router-dom';


const TrendingItems = ({services}) => {

  const dispatch = useDispatch();
  const {id}=useParams();
  const navigate = useNavigate();

  


  const handleClick = () => {
    navigate(`/service/${services._id}`);
    dispatch(getSingleVendor(id));
    dispatch(getSingleServices(services._id));
    console.log(services._id);
  }
  return (
<>
<section>
    <div className="flex box-content p-4 border-1">
      <div onClick={handleClick} className=" bg-red-700 rounded p-2 mr-2">
        <img src={services.image}/>
        <h1 className='text-2xl text-white text-center'>{services.name}</h1>
        <p className='text-white'></p>
        </div>
    
      <div className="card"></div>

    </div>
  </section>
</>

  )
}

export default TrendingItems
