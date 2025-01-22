const path =require('path')
const express = require('express');
const colors=require('colors')
const cors = require('cors');
const dotenv=require('dotenv').config();
const port = process.env.PORT || 8000;
const connectDB=require('./config/db')
const {errorHandler}=require('./middleware/errorMiddleware')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

connectDB();
const app=express();
app.use(bodyParser.json());

app.use(cors({

// origin: 'http://localhost:3000', 

 origin: 'https://event-ease-iota.vercel.app', 

  
}));




  
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/vendors',require('./Routes/VendorsRoutes'));
app.use('/api/users',require('./Routes/UserRoutes'));
app.use('/api/setup-budget',require('./Routes/BudgetRoutes'));
app.use('/api/services',require('./Routes/ServicesRoutes'));
app.use('/api/booking',require('./Routes/BookingRoutes'));
app.use('/api/packages',require('./Routes/PackagesRoutes'));




const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'marketease343@gmail.com',
      pass: process.env.APP_PASS
    }
  });
  
  app.post('/api/send-email', (req, res) => {
    const { firstName, lastName, email, message,phone } = req.body;
    console.log(message);
    console.log(email);
    const mailOptions = {
      from: email,
      to: 'marketease343@gmail.com', 
      subject: 'Customer Support Merge',
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
  });

app.use(errorHandler);
app.listen(port,()=>console.log(`Server started on port ${port}`));
