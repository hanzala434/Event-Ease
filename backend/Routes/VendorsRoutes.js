const express=require('express');
const router=express.Router()
const {getVendors,getVendor,createVendor,updateVendor,deleteVendor}=require( '../controllers/vendorController');

const {protect}=require('../middleware/AuthMiddleware')
const {authorizeRoles}=require('../middleware/RoleMiddleware')



router.get('/',getVendors);
router.get('/:id',getVendor);

router.post('/',protect,authorizeRoles("admin"),createVendor);

router.put('/:id',updateVendor);

router.delete('/:id',deleteVendor);

module.exports=router;