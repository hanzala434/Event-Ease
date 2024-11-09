import {createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import budgetService from './budgetService'


//get budget from local storage
const initialState={
    budget: [],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

// create/setup budget
export const createBudget=createAsyncThunk('',
    async(budgetData,thunkAPI)=>{
        try{
            const token=thunkAPI.getState().auth.user.token
            return await budgetService.createBudget(budgetData,token)
        }
        catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
    }
)

//get budget
export const getBudget=createAsyncThunk('budget/getBudget',async(_,thunkAPI)=>
    {
        try{
         const token=thunkAPI.getState().auth.user.token
         return await budgetService.getBudget(token)
    
         } catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
    }
)

//Delete user Budget
export const deleteBudget=createAsyncThunk('budget/delete',
    async(id,thunkAPI)=>{
        try{
            const token=thunkAPI.getState().auth.user.token
            return await budgetService.deleteBudget(id,token)
        }
        catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
    }
)


export const budgetSlice=createSlice({
    name:'budget',
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createBudget.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createBudget.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.budget.push(action.payload)
        })

        .addCase(createBudget.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })

        
        .addCase(getBudget.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getBudget.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.budget=action.payload
        })

        .addCase(getBudget.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })


        .addCase(deleteBudget.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(deleteBudget.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.budget=state.budget.filter((budget)=>
                budget._id!==action.payload.id)
        })

        .addCase(deleteBudget.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })


    }
})

export const {reset}=budgetSlice.actions
export default budgetSlice.reducer
