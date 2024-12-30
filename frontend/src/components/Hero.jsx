import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getBudget } from '../features/budget/budgetSlice';
import GetItem from './GetItem';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const { budget, isError, message } = useSelector((state) =>
    state.budget
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getBudget());
  }, [isError, message, dispatch]);

  const onClick = () => {
    navigate(`/category`);
  }

  // Sorting budgets by creation date and selecting the latest one
  const latestBudget = budget.length > 0 
  ? [...budget].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0]
  : null;

  return (
    <>
      <section className="mt-14">
      <div className="border-4 m-2 rounded flex flex-col md:flex-row items-center justify-around h-auto md:h-80">
      <div className=" bg-white lg:w-1/2">
            <h1 className="text-5xl text-red-950 m-4">Book Now!</h1>
            <p className=" text-2xl text-red-950 m-4">Manage Your Event Now</p>
            <button
              type="button"
              onClick={onClick}
              className=" text-3xl bg-red-950  hover:text-red-950 text-slate-50 hover:bg-slate-50 m-4 p-2 rounded font-bold border-2 border-transparent hover:border-red-950 "
            >
              Explore
            </button>
          </div>

          <div className='lg:w-1/2'>
            {latestBudget ? (
              <div className="w-60 p-4 rounded bg-red-950 m-4 ">
                <h1 className="text-white">Your Budget</h1>
                <GetItem budget={latestBudget} />
              </div>
            ) : (
             <></> 
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
