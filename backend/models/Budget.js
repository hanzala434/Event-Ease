const mongoose=require('mongoose')
const budgetSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'User',
    },
        decor: { 
            type: Number, 
            required: true 
        },
        photography: 
        { 
            type: Number, 
            required: true },
        venue: 
        { 
            type: Number, 
            required: true },
        others: 
        { 
            type: Number, 
            required: true },
        total: 
        { 
            type: Number, 
             },
     
   
},
{
    timestamps:true
})

module.exports =mongoose.model('Budget',budgetSchema)