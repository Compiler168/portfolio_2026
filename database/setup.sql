-- Majid Iqbal Portfolio Database Setup

-- Create database
CREATE DATABASE IF NOT EXISTS majid_portfolio;
USE majid_portfolio;

-- Disable foreign key checks to allow dropping tables
SET FOREIGN_KEY_CHECKS = 0;

-- Drop tables if they exist to ensure clean slate
DROP TABLE IF EXISTS contact_messages;

SET FOREIGN_KEY_CHECKS = 1;

-- Contact Messages table
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create index for better performance
CREATE INDEX idx_contact_email ON contact_messages(email);
