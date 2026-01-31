# Majid Iqbal's Portfolio Website - Backend

A robust Node.js/Express API backend with MySQL database for managing portfolio data, projects, skills, services, testimonials, and contact messages.

## Features

- ✅ RESTful API endpoints
- 🔐 JWT-based authentication for admin
- 📧 Email integration (Gmail/SMTP)
- 🗄️ MySQL database
- 🛡️ Input validation
- 📝 Contact form handling
- 🎯 CORS enabled
- 📊 Complete admin dashboard API

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MySQL** - Relational database
- **JWT** - Authentication
- **Nodemailer** - Email service
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **CORS** - Cross-origin requests

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js         # MySQL connection
│   │   └── email.js            # Email configuration
│   ├── controllers/
│   │   ├── projectController.js
│   │   ├── skillController.js
│   │   ├── serviceController.js
│   │   ├── testimonialController.js
│   │   ├── contactController.js
│   │   └── authController.js
│   ├── models/
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   ├── Service.js
│   │   ├── Testimonial.js
│   │   ├── ContactMessage.js
│   │   └── Admin.js
│   ├── routes/
│   │   ├── projectRoutes.js
│   │   ├── skillRoutes.js
│   │   ├── serviceRoutes.js
│   │   ├── testimonialRoutes.js
│   │   ├── contactRoutes.js
│   │   └── authRoutes.js
│   ├── middleware/
│   │   ├── auth.js             # JWT verification
│   │   └── validation.js       # Input validation
│   └── server.js               # Main server file
├── admin/                       # Admin panel frontend
│   ├── index.html
│   ├── login.html
│   ├── css/admin.css
│   └── js/admin.js
├── database/
│   └── setup.sql               # Database schema and sample data
├── .env                        # Environment variables
├── package.json
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MySQL Server (v5.7 or higher)
- Email account (Gmail recommended)

## Installation

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Setup MySQL Database

```bash
# Connect to MySQL
mysql -u root -p

# Run the setup script
source path/to/database/setup.sql
```

Or manually create the database:

```sql
CREATE DATABASE majid_portfolio;
USE majid_portfolio;
-- Run the schema from database/setup.sql
```

### 3. Configure Environment Variables

Create a `.env` file in the backend directory:

```env
# Database Configuration
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=majid_portfolio

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_in_production

# Email Configuration (Gmail)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=noreply@majidiqbal.com

# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# Admin Credentials
ADMIN_EMAIL=majid@example.com
ADMIN_PASSWORD=admin_password_change_this
```

### 4. Update Admin Password

Hash your password and update in the database:

```bash
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('your_password', 10));"
```

Then update the admins table:

```sql
UPDATE admins SET password = 'YOUR_HASHED_PASSWORD' WHERE email = 'majid@example.com';
```

### 5. Start the Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Authentication

```
POST   /api/auth/login          - Admin login
GET    /api/auth/verify         - Verify token (protected)
```

### Projects

```
GET    /api/projects            - Get all projects
GET    /api/projects/:id        - Get project by ID
POST   /api/projects            - Create project (protected)
PUT    /api/projects/:id        - Update project (protected)
DELETE /api/projects/:id        - Delete project (protected)
```

### Skills

```
GET    /api/skills              - Get all skills
POST   /api/skills              - Create skill (protected)
PUT    /api/skills/:id          - Update skill (protected)
DELETE /api/skills/:id          - Delete skill (protected)
```

### Services

```
GET    /api/services            - Get all services
POST   /api/services            - Create service (protected)
PUT    /api/services/:id        - Update service (protected)
DELETE /api/services/:id        - Delete service (protected)
```

### Testimonials

```
GET    /api/testimonials        - Get all testimonials
POST   /api/testimonials        - Create testimonial (protected)
PUT    /api/testimonials/:id    - Update testimonial (protected)
DELETE /api/testimonials/:id    - Delete testimonial (protected)
```

### Contact

```
GET    /api/contact             - Get all messages (protected)
POST   /api/contact             - Submit contact form
PUT    /api/contact/:id/read    - Mark as read (protected)
DELETE /api/contact/:id         - Delete message (protected)
```

## Request Examples

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"majid@example.com","password":"your_password"}'
```

### Create Project

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "My Project",
    "category": "Web Design",
    "description": "Project description",
    "overview": "Project overview",
    "problem": "Problem solved",
    "solution": "Solution provided",
    "features": ["Feature 1", "Feature 2"],
    "technologies": ["HTML", "CSS", "JavaScript"]
  }'
```

### Submit Contact Form

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I would like to discuss a project..."
  }'
```

## Database Schema

### Projects Table
- id (INT, PK)
- title (VARCHAR)
- category (VARCHAR)
- description (TEXT)
- overview (TEXT)
- problem (TEXT)
- solution (TEXT)
- features (JSON)
- technologies (JSON)
- image (VARCHAR)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### Skills Table
- id (INT, PK)
- category (VARCHAR)
- skills (JSON)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### Services Table
- id (INT, PK)
- title (VARCHAR)
- description (TEXT)
- icon (VARCHAR)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### Testimonials Table
- id (INT, PK)
- name (VARCHAR)
- company (VARCHAR)
- text (TEXT)
- rating (INT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### Contact Messages Table
- id (INT, PK)
- name (VARCHAR)
- email (VARCHAR)
- subject (VARCHAR)
- message (TEXT)
- is_read (BOOLEAN)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### Admins Table
- id (INT, PK)
- email (VARCHAR, UNIQUE)
- password (VARCHAR, hashed)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

## Admin Panel

Access the admin panel at:
```
http://localhost:5000/../admin/login.html
```

### Admin Features

- 📊 Dashboard with statistics
- 📁 Manage projects
- 🛠️ Manage skills
- 💼 Manage services
- ⭐ Manage testimonials
- 💬 View and manage contact messages
- 🔐 Secure authentication

## Email Configuration

### Gmail Setup

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password (not your regular password)
3. Use the App Password in `EMAIL_PASSWORD`

### Environment Variables

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_16_character_app_password
EMAIL_FROM=noreply@majidiqbal.com
```

## Error Handling

The API returns consistent error responses:

```json
{
  "error": "Error message description"
}
```

Status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

## Security Best Practices

1. ✅ JWT tokens expire after 24 hours
2. ✅ Passwords are hashed with bcrypt
3. ✅ Input validation on all endpoints
4. ✅ CORS enabled for trusted origins only
5. ✅ Environment variables for sensitive data
6. ✅ SQL injection prevention via parameterized queries

## Production Deployment

### Before Going Live

1. Change `JWT_SECRET` to a strong random string
2. Change admin credentials
3. Update email credentials
4. Set `NODE_ENV=production`
5. Update `CLIENT_URL` to your domain
6. Use HTTPS for all connections
7. Enable CORS only for your domain

### Example Deployment

```bash
# Install production dependencies only
npm install --production

# Start server
NODE_ENV=production npm start
```

## Troubleshooting

### MySQL Connection Error
- Check MySQL is running: `mysql --version`
- Verify credentials in `.env`
- Check database exists: `SHOW DATABASES;`

### Email Not Sending
- Verify SMTP credentials
- Check App Password for Gmail (not regular password)
- Check firewall/proxy settings
- Review error logs

### JWT Errors
- Token expired - user needs to login again
- Invalid token - check `JWT_SECRET` matches

## Development Tips

1. Use Postman to test API endpoints
2. Check server logs for detailed errors
3. Use `npm run dev` for auto-reload during development
4. Validate JSON with JSONLint
5. Monitor MySQL connections: `SHOW PROCESSLIST;`

## Performance Optimization

- Connection pooling for MySQL
- Request validation before database queries
- Indexed columns for common searches
- Proper error handling and logging

## License

© 2026 Majid Iqbal. All rights reserved.

## Support

For technical issues: majid@example.com
For API documentation: See endpoints above

## Version

Current Version: 1.0.0
Last Updated: January 2026
