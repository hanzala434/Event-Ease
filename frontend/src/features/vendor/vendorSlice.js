import {createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import vendorService from './vendorService'


//get vendor from local storage
const initialState={
    vendor: [],
    vendorSingle:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

// create vendor
export const createVendor=createAsyncThunk('',
    async(vendorData,thunkAPI)=>{
        try{
            const token=thunkAPI.getState().auth.user.token
            return await vendorService.createVendor(vendorData,token)
        }
        catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
    }
)

//get all vendors
export const getVendor=createAsyncThunk('vendor/getVendor',async(_,thunkAPI)=>
    {
        try{
         
         return await vendorService.getVendor()
    
         } catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
    }
)

//get single vendor
export const getSingleVendor=createAsyncThunk('vendor/getSingleVendor',async(id,thunkAPI)=>
    {
        try{
         
         return await vendorService.getSingleVendor(id)
    
         } catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
    }
)


export const vendorSlice=createSlice({
    name:'vendor',
    initialState,
    reducers:{
        reset:(state)=>initialState,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createVendor.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createVendor.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.vendor.push(action.payload)
        })

        .addCase(createVendor.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })

        
        .addCase(getVendor.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getVendor.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.vendor=action.payload
        })

        .addCase(getVendor.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })


        .addCase(getSingleVendor.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getSingleVendor.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.vendorSingle=action.payload
        })

        .addCase(getSingleVendor.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })

    }
})

export const {reset}=vendorSlice.actions
export default vendorSlice.reducer
