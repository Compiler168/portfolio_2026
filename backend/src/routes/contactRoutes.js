const express = require('express');
const contactController = require('../controllers/contactController');
const { validate, validateContact } = require('../middleware/validation');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// Public route (no authentication)
router.post('/', validate(validateContact), contactController.submitContactForm);

// Admin routes (protected)
router.get('/', authenticateToken, contactController.getAllMessages);
router.put('/:id/read', authenticateToken, contactController.markAsRead);
router.delete('/:id', authenticateToken, contactController.deleteMessage);

module.exports = router;
