const express=require('express')
const router=express.Router()
const {createBudget,getBudget,updateBudget,deleteBudget}=require('../controllers/budgetController')

const {protect}=require('../middleware/AuthMiddleware')

//
router.post('/',protect,createBudget)
router.get('/:id',protect,getBudget)
router.delete('/:id',protect,deleteBudget)
router.put('/:id',protect,updateBudget)

module.exports=router