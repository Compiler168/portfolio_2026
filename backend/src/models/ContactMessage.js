const { pool } = require('../config/database');

// Contact Message Model
class ContactMessage {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM contact_messages ORDER BY created_at DESC');
        return rows;
    }

    static async create(data) {
        const { name, email, subject, message } = data;
        const [result] = await pool.query(
            'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
            [name, email, subject, message]
        );
        return result.insertId;
    }

    static async markAsRead(id) {
        await pool.query('UPDATE contact_messages SET is_read = 1 WHERE id = ?', [id]);
        return true;
    }

    static async delete(id) {
        await pool.query('DELETE FROM contact_messages WHERE id = ?', [id]);
        return true;
    }
}

module.exports = ContactMessage;
