const { pool } = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Admin Model
class Admin {
    static async getByEmail(email) {
        const [rows] = await pool.query('SELECT * FROM admins WHERE email = ?', [email]);
        return rows[0];
    }

    static async create(email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await pool.query(
            'INSERT INTO admins (email, password) VALUES (?, ?)',
            [email, hashedPassword]
        );
        return result.insertId;
    }

    static async verifyPassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }

    static generateToken(admin) {
        return jwt.sign(
            { id: admin.id, email: admin.email, role: 'admin' },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
    }
}

module.exports = Admin;
