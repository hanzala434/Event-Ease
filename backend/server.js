const path =require('path')
const express = require('express');
const colors=require('colors')
const cors = require('cors');
const dotenv=require('dotenv').config()
const port=8000
const connectDB=require('./config/db')
const {errorHandler}=require('./middleware/errorMiddleware')


connectDB();
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/vendors',require('./Routes/VendorsRoutes'));
app.use('/api/users',require('./Routes/UserRoutes'));
app.use('/api/setup-budget',require('./Routes/BudgetRoutes'));
app.use('/api/services',require('./Routes/ServicesRoutes'));
app.use('/api/booking',require('./Routes/BookingRoutes'));
app.use('/api/packages',require('./Routes/PackagesRoutes'));








app.use(errorHandler);
app.listen(port,()=>console.log(`Server started on port ${port}`));