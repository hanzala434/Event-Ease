const asyncHandler=require('express-async-handler')
const Services=require('../models/Services')
const Vendor = require('../models/Vendor')
//@disc get vendors
//route GET/api/vendors
//@access private
const getServices=asyncHandler(async (req,res)=>{
    
    const services=await Services.find({ vendor: req.params.id  })
   

    res.status(200).json(services)
})

//@disc get single service
//route GET/api/vendors
//@access private
const getSingleService=asyncHandler(async (req,res)=>{
    const service = await Services.findOne({
        _id: req.params.serviceId,
        vendor: req.params.id
    })
    res.status(200).json(service)
})

//@disc create vendors
//route POST/api/vendors
//@access private
const createServices=asyncHandler(async (req,res)=>{
    
    if(!req.body.name,!req.body.description,!req.body.price,
        !req.body.image){
        res.status(400)
        throw new Error('Please add all fields');
    }

    // Fetch vendor name
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
        res.status(400);
        throw new Error('Vendor not found');
    }
    
    const services=await Services.create({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:req.body.image,
        vendor: req.params.id,
        vendorName: vendor.name
       
    })
    res.status(200).json(services)
}
)
//@disc update vendors
//route PUT/api/vendors
//@access private
const updateServices= asyncHandler(async (req,res)=>{
    const services=await Services.findById(req.params.id)
    if(!services){
        res.status(400)
        throw new Error('Vendor not found')
    }
    const updatedServices=await Services.findByIdAndUpdate(req.params.id,req.body,
        {
            new:true,

        })


    res.status(200).json(updatedServices)
})

//@disc Delete vendors
//route DELETE/api/vendors
//@access private
const deleteServices=asyncHandler(async (req,res)=>{
    const services=await Services.findById(req.params.id);
    if(!services){
        res.status(400)
        throw new Error('Vendor with id not found')
    }
    await Services.findByIdAndDelete(req.params.id); // Delete the budget
    res.status(200).json({id:req.params.id})

})


module.exports={
    createServices,getServices,updateServices,deleteServices,
    getSingleService,

}