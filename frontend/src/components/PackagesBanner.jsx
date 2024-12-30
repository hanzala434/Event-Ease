import React from 'react'
import { useSelector } from 'react-redux'

const PackagesBanner = () => {
    const packageS=useSelector((state)=>state.packages.package)
  return (
    <>
    <section>
    <div className="flex flex-col md:flex-row p-4">
    <div className="w-full md:w-1/2 m-2 h-80">
        <h1 className="text-5xl text-red-950 mb-4"> {packageS.name}</h1>
        <p>
           {packageS.services}
        </p>
        <h2>Estimated Price: {packageS.price}</h2>
    </div>
    <div className="w-full md:w-1/2 m-2 flex justify-center">
        <img
            src={packageS.image}
            alt="Eventia Outdoor Events"
            className="object-cover rounded-lg shadow-lg"
        />
    </div>
    </div>
    </section>
    </>
  )
}

export default PackagesBanner
