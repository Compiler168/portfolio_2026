const mongoose = require('mongoose');

const contactMessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    subject: {
        type: String,
        required: [true, 'Subject is required'],
        trim: true,
        maxlength: [200, 'Subject cannot exceed 200 characters']
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
        maxlength: [5000, 'Message cannot exceed 5000 characters']
    },
    isRead: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Static methods
contactMessageSchema.statics.getAll = function () {
    return this.find().sort({ createdAt: -1 });
};

contactMessageSchema.statics.createMessage = async function (data) {
    const message = new this(data);
    await message.save();
    return message._id;
};

contactMessageSchema.statics.markAsRead = async function (id) {
    await this.findByIdAndUpdate(id, { isRead: true });
    return true;
};

contactMessageSchema.statics.deleteMessage = async function (id) {
    await this.findByIdAndDelete(id);
    return true;
};

module.exports = mongoose.models.ContactMessage || mongoose.model('ContactMessage', contactMessageSchema);
