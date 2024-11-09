import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteBudget } from '../features/budget/budgetSlice'

const GetItem = ({budget}) => {
  const dispatch=useDispatch()

  return (
    <div>
      <h2 className='text-lime-600'>{budget.total}</h2>
      <button onClick={()=>dispatch(deleteBudget(budget.user))} 
      className="close  bg-red-700 text-slate-50 border-solid borde rounded hover:bg-slate-50 hover:text-red-700 p-2 ">Delete</button>
    </div>
  )
}

export default GetItem
