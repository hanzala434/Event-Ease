import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const PackageHero = () => {

      const dispatch = useDispatch();
      const {id}=useParams();
      const navigate=useNavigate()
      const packageS=useSelector((state)=>state.packages.package)
        console.log(packageS._id)
      const handleClick = () => {
         navigate(`/appointment/${packageS.vendor}`);
      }
  return (
   <>
   <div className="md:mt-16 p-5 text-center bg-cover bg-center bg-no-repeat  h-[400px] bg-[url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')]">

<div className="mask bg-opacity-60">

    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="text-white">
        <h1 class="mb-3">{packageS.name}</h1>
        <a data-mdb-ripple-init class="btn btn-outline-light btn-lg" onClick={handleClick}  role="button">Book Now</a>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default PackageHero
