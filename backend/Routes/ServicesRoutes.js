const express = require('express');
const router = express.Router();
const {
  createServices,
  getServices, 
  updateServices,
  deleteServices,
  getSingleService
} = require('../controllers/servicesController');

const { protect } = require('../middleware/AuthMiddleware');

// Get services for a specific vendor
router.get('/:id', getServices);

//get single service
router.get('/:id/:serviceId', getSingleService);


// Create a new service
router.post('/:id', createServices); 

// Update a service by ID
router.put('/:id', protect, updateServices);

// Delete a service by ID
router.delete('/:id', protect, deleteServices);

module.exports = router;
