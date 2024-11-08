const express=require('express')
const router=express.Router()
const {createBooking,getBookings,getBooking}=require('../controllers/bookingController')

const {protect}=require('../middleware/AuthMiddleware')

//
router.post('/:id',protect,createBooking)// vendor id
router.get('/:id',protect,getBookings)//user id
//router.get('/:id',protect,getBooking)//booking id

//router.post('/confirm',protect,sendWhatsAppMessage );

module.exports=router