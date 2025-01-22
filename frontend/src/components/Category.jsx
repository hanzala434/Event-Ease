import React from 'react';
import { GiTheaterCurtains } from "react-icons/gi";
import { IoBagSharp, IoBalloonOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate('/category-vendor');
  };

  return (
    <>
      <section className="mt-16">
        {/* Responsive parent container */}
        <div className="m-2 p-2 flex flex-col md:flex-row items-center justify-center h-auto md:h-80">
          {/* Wedding Category */}
          <div
            onClick={handleClick1}
            className="group rounded bg-slate-50 border-2 border-red-950 m-4 h-60 w-full lg:w-full flex flex-col justify-center items-center cursor-pointer 
                 transition-colors duration-300 hover:bg-red-950 hover:text-slate-50"
          >
            <div className="flex flex-col items-center">
              <GiTheaterCurtains className="text-5xl text-red-950 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-red-950 mt-4 font-bold group-hover:text-white transition-colors duration-300">
                Wedding
              </h1>
            </div>
          </div>

          {/* Birthdays Category */}
          <div
            onClick={handleClick1}
            className="group rounded bg-slate-50 border-2 border-red-950 m-4 h-60 w-full lg:w-full flex flex-col justify-center items-center cursor-pointer 
                 transition-colors duration-300 hover:bg-red-950 hover:text-slate-50"
          >
            <div className="flex flex-col items-center">
              <IoBalloonOutline className="text-5xl text-red-950 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-red-950 mt-4 font-bold group-hover:text-white transition-colors duration-300">
                Birthdays
              </h1>
            </div>
          </div>

          {/* Corporate Category */}
          <div
            onClick={handleClick1}
            className="group rounded bg-slate-50 border-2 border-red-950 m-4 h-60 w-full lg:w-full flex flex-col justify-center items-center cursor-pointer 
                 transition-colors duration-300 hover:bg-red-950 hover:text-slate-50"
          >
            <div className="flex flex-col items-center">
              <IoBagSharp className="text-5xl text-red-950 group-hover:text-white transition-colors duration-300" />
              <h1 className="text-red-950 mt-4 font-bold group-hover:text-white transition-colors duration-300">
                Corporate
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
