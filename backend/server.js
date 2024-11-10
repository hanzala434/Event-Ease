const path =require('path')
const express = require('express');
const colors=require('colors')
const cors = require('cors');
const dotenv=require('dotenv').config()
const port=8000
const connectDB=require('./config/db')
const {errorHandler}=require('./middleware/errorMiddleware')
const { injectSpeedInsights }=require('@vercel/speed-insights');
 
injectSpeedInsights();

connectDB();
const app=express();
app.use(cors({
    origin: process.env.FRONTEND_URL || 'https://event-ease-1nik.vercel.app/', // Set your frontend URL here
  }));
  
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/vendors',require('./Routes/VendorsRoutes'));
app.use('/api/users',require('./Routes/UserRoutes'));
app.use('/api/setup-budget',require('./Routes/BudgetRoutes'));
app.use('/api/services',require('./Routes/ServicesRoutes'));
app.use('/api/booking',require('./Routes/BookingRoutes'));
app.use('/api/packages',require('./Routes/PackagesRoutes'));


// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }


app.use(errorHandler);
app.listen(port,()=>console.log(`Server started on port ${port}`));