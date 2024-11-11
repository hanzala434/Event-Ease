const path =require('path')
const express = require('express');
const colors=require('colors')
const cors = require('cors');
const dotenv=require('dotenv').config()
const port = process.env.PORT || 8000;
const connectDB=require('./config/db')
const {errorHandler}=require('./middleware/errorMiddleware')
const { injectSpeedInsights }=require('@vercel/speed-insights');
 
injectSpeedInsights();

connectDB();
const app=express();
app.use(cors({
  origin: 'https://event-ease-woxl.vercel.app', // Your frontend URL in production
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.options('*', cors()); 

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://event-ease-woxl.vercel.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

  
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