import {createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import serviceService from './serviceService'


//get vendor from local storage
const initialState={
    services: [],
    singleService:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

// create services
export const createServices=createAsyncThunk('services/createServices',
    async(serviceData,thunkAPI)=>{
        try{
            const token=thunkAPI.getState().auth.user.token
            const id=thunkAPI.getState().vendor.vendorSingle._id
            return await serviceService.createServices(serviceData,id,token)
        }
        catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
    }
)

//get all services of single vendor
export const getServices=createAsyncThunk('services/getServices',async(id,thunkAPI)=>
    {
        try{
         
         return await serviceService.getServices(id)
    
         } catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
    }
)

//get single service of specific vendor
export const getSingleServices=createAsyncThunk('services/getSingleServices',async(id,thunkAPI)=>
    {
        try{
         const vendorId=thunkAPI.getState().vendor.vendorSingle._id
 
         return await serviceService.getSingleServices(vendorId,id)
         } catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
       
    }
)

export const serviceSlice=createSlice({
    name:'services',
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createServices.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createServices.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.services.push(action.payload)
        })

        .addCase(createServices.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })

        
        .addCase(getServices.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getServices.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.services=action.payload
        })

        .addCase(getServices.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })


        .addCase(getSingleServices.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getSingleServices.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.singleService=action.payload
        })

        .addCase(getSingleServices.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })



    }
})

export const {reset}=serviceSlice.actions
export default serviceSlice.reducer
