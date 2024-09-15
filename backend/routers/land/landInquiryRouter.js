const express = require('express');
const router = express.Router();
const landInquiryController = require('../../controllers/land/landInquiryController');

// Create Inquiry
router.post('/', landInquiryController.createInquiry);

// Get All Inquiries
router.get('/', landInquiryController.getAllInquiries);

// Get Inquiry by ID
router.get('/:id', landInquiryController.getInquiryById);
router.get('/land/:id', landInquiryController.getInquiryBylandId);

// Update Inquiry Status
router.put('/:id', landInquiryController.updateInquiry);

// Delete Inquiry
router.delete('/:id', landInquiryController.deleteInquiry);

module.exports = router;
