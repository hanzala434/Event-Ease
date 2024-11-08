const mongoose=require('mongoose')
const bookingSchema=mongoose.Schema({
    vendor:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Vendor',
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
    name: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    type: { 
        type: String, 
        required: true 
    },   
    time: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    additional: { 
        type: String, 
        required: false 
    },
     
   
},
{
    timestamps:true
})

module.exports =mongoose.model('Bookings',bookingSchema)