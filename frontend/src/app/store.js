import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import budgetReducer from '../features/budget/budgetSlice'
import vendorReducer from '../features/vendor/vendorSlice'
import serviceReducer from '../features/service/serviceSlice'
import bookingReducer from '../features/booking/bookingSlice'
import packagesReducer from '../features/packages/packagesSlice'



export const store=configureStore({
    reducer:{
        auth:authReducer,
        budget:budgetReducer,
        vendor:vendorReducer,
        services:serviceReducer,
        booking:bookingReducer,
        packages:packagesReducer,
    },
})