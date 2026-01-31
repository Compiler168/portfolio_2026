const ContactMessage = require('../models/ContactMessage');
const { sendContactEmail } = require('../config/email');

// Get all contact messages (Admin only)
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await ContactMessage.getAll();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Submit contact form
exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate input
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Save to database
        const id = await ContactMessage.create({ name, email, subject, message });

        // Send email to admin
        await sendContactEmail(name, email, subject, message);

        res.status(201).json({ success: true, id, message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mark message as read (Admin only)
exports.markAsRead = async (req, res) => {
    try {
        await ContactMessage.markAsRead(req.params.id);
        res.json({ message: 'Message marked as read' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete contact message (Admin only)
exports.deleteMessage = async (req, res) => {
    try {
        await ContactMessage.delete(req.params.id);
        res.json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
