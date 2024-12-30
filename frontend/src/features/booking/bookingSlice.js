import {createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import bookingService from './bookingService'


//get vendor from local storage
const initialState={
    booking: [],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

// create booking
export const createBooking=createAsyncThunk('booking/createBooking',
    async(bookingData,thunkAPI)=>{
        try{
            const id=thunkAPI.getState().vendor.vendorSingle._id
            console.log(id)
            const token=thunkAPI.getState().auth.user.token
            return await bookingService.createBooking(bookingData,id,token)
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
export const getBooking=createAsyncThunk('booking/getBooking',async(id,thunkAPI)=>
    {
        try{
        const token=thunkAPI.getState().auth.user.token
         return await bookingService.getBooking(id,token)
    
         } catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
    }
)


export const bookingSlice=createSlice({
    name:'booking',
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createBooking.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createBooking.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.booking.push(action.payload)
        })

        .addCase(createBooking.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })

        
        .addCase(getBooking.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getBooking.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.booking=action.payload
        })

        .addCase(getBooking.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })


    }
})

export const {reset}=bookingSlice.actions
export default bookingSlice.reducer
