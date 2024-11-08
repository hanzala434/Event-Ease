const asyncHandler=require('express-async-handler')
const Vendor=require('../models/Vendor')
//@disc get vendors
//route GET/api/vendors
//@access private
const getVendors=asyncHandler(async (req,res)=>{
    const vendor=await Vendor.find()
    res.status(200).json(vendor)
})

//@disc get single vendor
//route GET/api/vendor/:id
//@access private
const getVendor=asyncHandler(async (req,res)=>{
    const vendor=await Vendor.findById(req.params.id)
    if(!vendor){
        res.status(400)
        throw new Error('Vendor not found')
    }
    res.status(200).json(vendor)
})


//@disc create vendors
//route POST/api/vendors
//@access private
const createVendor=asyncHandler(async (req,res)=>{
    if(!req.body.name,!req.body.category,!req.body.profile,
        !req.body.phone,!req.body.email){
        res.status(400)
        throw new Error('Please add text');
    }

    const vendor=await Vendor.create({
        name:req.body.name,
        category:req.body.category,
        email:req.body.email,
        profile:req.body.profile,
        phone:req.body.phone,
        
    })
    res.status(200).json(vendor)
}
)
//@disc update vendors
//route PUT/api/vendors
//@access private
const updateVendor= asyncHandler(async (req,res)=>{
    const vendor=await Vendor.findById(req.params.id)
    if(!vendor){
        res.status(400)
        throw new Error('Vendor not found')
    }
    const updatedVendor=await Vendor.findByIdAndUpdate(req.params.id,req.body,
        {
            new:true,

        })


    res.status(200).json(updatedVendor)
})

//@disc Delete vendors
//route DELETE/api/vendors
//@access private
const deleteVendor=asyncHandler(async (req,res)=>{
    const vendor=await Vendor.findById(req.params.id);
    if(!vendor){
        res.status(400)
        throw new Error('Vendor with id not found')
    }
    await Vendor.findByIdAndDelete(req.params.id); // Delete the budget
    res.status(200).json({id:req.params.id})

})


module.exports={
    getVendors,createVendor,updateVendor,deleteVendor,
    getVendor,

}