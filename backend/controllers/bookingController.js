const asyncHandler=require('express-async-handler')
const Bookings=require('../models/Bookings')
const Vendor = require('../models/Vendor')
const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

//@disc get vendors
//route GET/api/vendors
//@access private
const getBookings=asyncHandler(async (req,res)=>{
    
    const bookings=await Bookings.find({ user: req.params.id })
    res.status(200).json(bookings)
})

//@disc create vendors
//route POST/api/vendors
//@access private
const createBooking=asyncHandler(async (req,res)=>{
    const vendor=await Vendor.findById(req.params.id)

    
    if(!req.body.name,!req.body.phone,!req.body.type,
        !req.body.time, !req.body.city){
        res.status(400)
        throw new Error('Please add all fields');
    }

    const bookings=await Bookings.create({
        name:req.body.name,
        phone:req.body.phone,
        type:req.body.type,
        time:req.body.time,
        city:req.body.city,
        vendor: req.params.id,
        user:req.user.id,
        
    })
    res.status(200).json(bookings)

    console.log(bookings.phone);
    console.log(vendor.phone);


  try {
    const message1 = await client.messages.create({
      body: `Hey ${bookings.name} your Appointment has been sent for ${bookings.type} Event at ${bookings.time} time for ${vendor.name} at ${bookings.city}!`,
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:${bookings.phone}`
      
    });
    console.log('WhatsApp message sent:', message1.sid);
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
  }
  //vendor message
  try {
  const message2 = await client.messages.create({
    body: `Hey ${vendor.name} you have an Appointment for ${bookings.type} Event at ${bookings.time} time from ${bookings.name}.
    Contact Number: ${bookings.phone}`,
    from: process.env.TWILIO_WHATSAPP_NUMBER,
    to: `whatsapp:${vendor.phone}`
    
  });
  console.log('WhatsApp message sent:', message2.sid);
} catch (error) {
  console.error('Error sending WhatsApp message:', error);
}
}
)

// // controllers/bookingController.js
// const twilio = require('twilio');
// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// const sendWhatsAppMessage = asyncHandler(async (req,res) => {
//     const { userPhoneNumber, eventDetails } = req.body;

//   try {
//     const message = await client.messages.create({
//       body: `Your booking for ${bookings.name} on ${bookings.date} is confirmed!`,
//       from: process.env.TWILIO_WHATSAPP_NUMBER,
//       to: `whatsapp:${userPhoneNumber}`
//     });
//     console.log('WhatsApp message sent:', message.sid);
//   } catch (error) {
//     console.error('Error sending WhatsApp message:', error);
//   }
// })


//@disc get vendors
//route GET/api/vendors
//@access private
// const getBooking=asyncHandler(async (req,res)=>{
//     const bookings=await Bookings.findById(req.params.id)
//     if(!bookings){
//         res.status(400)
//         throw new Error('Booking not found')
//     }
//     res.status(200).json(bookings)
// })


// //@disc update vendors
// //route PUT/api/vendors
// //@access private
// const updateServices= asyncHandler(async (req,res)=>{
//     const services=await Services.findById(req.params.id)
//     if(!services){
//         res.status(400)
//         throw new Error('Vendor not found')
//     }
//     const updatedServices=await Services.findByIdAndUpdate(req.params.id,req.body,
//         {
//             new:true,

//         })


//     res.status(200).json(updatedServices)
// })

// //@disc Delete vendors
// //route DELETE/api/vendors
// //@access private
// const deleteServices=asyncHandler(async (req,res)=>{
//     const services=await Services.findById(req.params.id);
//     if(!services){
//         res.status(400)
//         throw new Error('Vendor with id not found')
//     }
//     await Services.findByIdAndDelete(req.params.id); // Delete the budget
//     res.status(200).json({id:req.params.id})

// })


module.exports={
    createBooking,
    
    getBookings,

}