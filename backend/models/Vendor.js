const mongoose=require('mongoose')
const vendorSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'User',
    },
    name:{
    type:String,
    required:[true,'Please add name']
    },
    category:{
        type:String,
        required:[true,'Please add category']
    },
    profile:{
        type:String,
    },
    email:{
        type:String,
        required:[true,'Please add email']
    },
    phone:{
        type:String,
        required:[true,'Please add Phone Number']
    }
    },
    {timestamps:true,}
)

module.exports =mongoose.model('Vendor',vendorSchema);