import {createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import packagesService from './packagesService'


//get vendor from local storage
const initialState={
    packages: [],
    package:{},
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

// create services
export const createPackages=createAsyncThunk('packages/createPackages',
    async(packagesData,thunkAPI)=>{
        try{
            const id=thunkAPI.getState().vendor.vendorSingle._id
            return await packagesService.createServices(packagesData,id)
        }
        catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
    }
)

//get single vendor's packages
export const getPackages=createAsyncThunk('packages/getPackages',async(id,thunkAPI)=>
    {
        try{
         return await packagesService.getPackages(id)
    
         } catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getSinglePackages=createAsyncThunk('packagesSingle/getPackages',async(id,thunkAPI)=>
    {
        try{
         return await packagesService.getSinglePackages(id)
    
         } catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
    }
)

//get all packages
export const getAllPackages=createAsyncThunk('packages/getAllPackages',async(thunkAPI)=>
    {
        try{
       
         return await packagesService.getAllPackages()
    
         } catch(error){
            const message=(error.response && error.response.data &&
                 error.response.data.message) || error.message || 
                 error.toString()
                 return thunkAPI.rejectWithValue(message)
        }
    }
)


export const packagesSlice=createSlice({
    name:'packages',
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createPackages.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createPackages.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.packages.push(action.payload)
        })

        .addCase(createPackages.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })

        
        .addCase(getPackages.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getPackages.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.packages=action.payload
        })

        .addCase(getPackages.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })

        .addCase(getSinglePackages.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getSinglePackages.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.package=action.payload
        })

        .addCase(getSinglePackages.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })

        .addCase(getAllPackages.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getAllPackages.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.packages=action.payload
        })

        .addCase(getAllPackages.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })


    }
})

export const {reset}=packagesSlice.actions
export default packagesSlice.reducer
