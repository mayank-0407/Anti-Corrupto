const express = require('express');
const router = express.Router();
const challanController = require('../controllers/challanController');

router.post('/challans', challanController.createChallan);
router.get('/challans', challanController.getAllChallans);
router.get('/challans/:id', challanController.getChallanById);
router.put('/challans/:id', challanController.updateChallan);
router.delete('/challans/:id', challanController.deleteChallan);

module.exports = router;
