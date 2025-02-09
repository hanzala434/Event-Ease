const asyncHandler=require('express-async-handler')
const Packages=require('../models/Packages')
const Vendor = require('../models/Vendor')
//@disc get vendors
//route GET/api/vendors
//@access private
const getPackages=asyncHandler(async (req,res)=>{
    
    const packages=await Packages.find({ vendor: req.params.id })
    res.status(200).json(packages)
})

//get all packages
const getAllPackages=asyncHandler(async (req,res)=>{
    
    const packages=await Packages.find()
    res.status(200).json(packages)
})

//@disc create vendors
//route POST/api/vendors
//@access private
const createPackages=asyncHandler(async (req,res)=>{
    
    if(!req.body.name,!req.body.price,!req.body.image,
        !req.body.services){
        res.status(400)
        throw new Error('Please add all fields');
    }

    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
        res.status(400);
        throw new Error('Vendor not found');
    }

    const packages=await Packages.create({
        name:req.body.name,
        services:req.body.services,
        price:req.body.price,
        image:req.body.image,
        vendor: req.params.id,
        vendorName:vendor.name
    })
    res.status(200).json(packages)
}
)

const getPackageById = asyncHandler(async (req, res) => {
    const package = await Packages.findById(req.params.id);

    if (!package) {
        res.status(404);
        throw new Error('Package not found');
    }

    res.status(200).json(package);
});
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
    createPackages,
    getPackages,
    getAllPackages,
    getPackageById
}
