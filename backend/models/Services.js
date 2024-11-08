const mongoose=require('mongoose')
const servicesSchema=mongoose.Schema({
    vendor:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Vendor',
    },
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    price: { 
        type: String, 
        required: true 
    },   
    image: { 
        type: String, 
        required: true 
    },
    vendorName: { 
        type: String, 
        required: true 
    },
    
},
{
    timestamps:true
})

module.exports =mongoose.model('Services',servicesSchema)