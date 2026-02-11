const express = require('express');
const router = express.Router();

// Import the controller
const {
    getAllChefs,
    createChefs,
    getChefsById,
    updateChefs,
    deleteChefs,
} = require('../controllers/chefController');

// 1. If user goes to GET /dishes → get all dishes
router.get('/chefs', getAllChefs);

// 2. If user sends POST /dishes → create dish
router.post('/chefs', createChefs);

// 3. If user goes to GET /dishes/:id → get specific dish
router.get('/chefs/:id', getChefsById);

// 4. If user sends PUT /dishes/:id → update dish
router.put('/chefs/:id', updateChefs);

// 5. If user sends DELETE /dishes/:id → delete dish
router.delete('/chefs/:id', deleteChefs);

// Export router (ONLY ONCE, AT THE END)
module.exports = router;
