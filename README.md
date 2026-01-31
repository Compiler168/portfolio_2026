# Professional Portfolio Website - Majid Iqbal

A high-performance, modern, and professional portfolio website. This version is optimized for speed and simplicity, with all content managed directly on the frontend and a lightweight Node.js/MySQL backend dedicated solely to handling the "Contact Us" form.

![Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![Type](https://img.shields.io/badge/Architecture-Frontend%20Focused-blue)

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Database Configuration](#-database-configuration)
- [Running Locally](#-running-locally)

## 🌟 Project Overview
This portfolio is built to be extremely lightweight and fast. By moving static content (projects, skills, testimonials) into a dedicated frontend data file, we eliminate unnecessary API calls and database complexity while keeping the site fully functional and professional.

### Core Sections
1.  **Home**: Modern hero section with professional initials.
2.  **About**: Comprehensive summary and key experience metrics.
3.  **Skills**: Categorized skills (UI/UX, Frontend, Backend, etc.).
4.  **Services**: Overview of professional offerings.
5.  **Portfolio**: Smooth project grid with detailed modal views.
6.  **Testimonials**: Client feedback with star ratings.
7.  **Contact**: Fully functional AJAX contact form.

## 🚀 Key Features
- **Frontend Data Management**: Content is managed in `frontend/js/data.js` for instant loading and easy updates.
- **Lightweight Backend**: Minimalist Node.js server for processing contact form submissions.
- **MySQL Integration**: Reliable storage for contact messages.
- **Responsive & Premium UI**: Hand-crafted CSS with smooth animations and transitions.
- **Performance Optimized**: Zero dependency frontend (Vanilla JS) for maximum speed.

## 🛠 Tech Stack
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES6+).
- **Backend**: Node.js, Express.
- **Database**: MySQL.
- **Icons**: Font Awesome 6.

## 📂 Project Structure
```text
Portfolio-Website/
├── frontend/               # Website files
│   ├── css/                # Stylesheets
│   ├── js/                 # Logic & Data
│   │   ├── data.js         # STATIC CONTENT (Edit this)
│   │   └── main.js         # App logic
│   └── index.html          # Main page
├── backend/                # Server-side logic
│   └── src/                # Source code
│       ├── controllers/    # Request handlers
│       ├── models/         # Database models
│       ├── routes/         # API endpoints
│       └── server.js       # Entry point
└── database/
    └── setup.sql           # Database schema
```

## 📦 Prerequisites
- **Node.js** (v14+)
- **MySQL** (Username: `root`, Password: `root`)

## 📥 Installation & Setup

1.  **Navigate to Backend**
    ```bash
    cd backend
    npm install
    ```

2.  **Configure Environment**
    Confirm the `.env` settings:
    ```env
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=root
    MYSQL_DATABASE=majid_portfolio
    PORT=5000
    ```

## 🗄 Database Configuration

1.  **Create Database**
    Run the following in your MySQL terminal or client:
    ```sql
    CREATE DATABASE IF NOT EXISTS majid_portfolio;
    ```

2.  **Import Schema**
    Execute the `database/setup.sql` script to create the `contact_messages` table.

## 🏃 Running Locally

1.  **Start Backend**
    ```bash
    cd backend
    npm start
    ```
    *Server runs on `http://localhost:5000`*

2.  **Open Frontend**
    Simply open `frontend/index.html` in your browser, or serve it using a local server (e.g., Live Server extension in VS Code).

---
© 2026 Majid Iqbal. Professional, Clean, and Production-Ready.
