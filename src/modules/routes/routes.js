
const express = require('express');
const router = express.Router();

const {
  parsAllCosts,
  setNewCost,
  costDelete,
  editCost,
  summCosts
} = require('../controllers/cost_controller')

router.get('/allCosts', parsAllCosts);
router.post('/newCost', setNewCost);
router.delete('/costDelete', costDelete);
router.patch('/editCost', editCost);
router.get('/summCost', summCosts)

module.exports = router;