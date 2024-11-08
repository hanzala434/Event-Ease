const express = require('express');
const router = express.Router();
const {
 createPackages,getAllPackages,getPackages
} = require('../controllers/packagesController');

const { protect } = require('../middleware/AuthMiddleware');

// Get packages for a specific vendor
router.get('/:id', getPackages);

// Create a new service
router.post('/:id', protect,createPackages); 

// Get all  packages for a all vendor
router.get('/', getAllPackages);


module.exports = router;
