# 🚀 QuickBlog - AI Powered Blogging Platform

QuickBlog is a modern full-stack blogging platform that enables users to read blogs, leave comments, and explore content, while providing an admin dashboard for managing posts. It also integrates Google Gemini AI to assist with blog content generation.

## 🌐 Live Demo

🔗 https://minar-ai-blog.vercel.app

## 📂 GitHub Repository

🔗 https://github.com/minar-hossain82/ai-blog-app

---

# ✨ Features

### User Features

- Browse published blog posts
- Read detailed blog articles
- Comment on blog posts
- Responsive design for all devices

### Admin Features

- Secure Admin Authentication
- Create new blogs
- Edit existing blogs
- Publish & Unpublish blogs
- Save blogs as Draft
- Delete blogs
- Manage comments

### AI Features

- Generate blog content using Google Gemini API
- Improve writing productivity with AI assistance

---

# 🛠 Tech Stack

### Frontend

- React.js
- Tailwind CSS
- React Router
- Axios

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Authentication

- JWT (JSON Web Token)

### Cloud Storage

- ImageKit

### AI Integration

- Google Gemini API

---

# 📁 Project Structure

```
ai-blog-app
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── config
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/minar-hossain82/ai-blog-app.git
```

## Go to project folder

```bash
cd ai-blog-app
```

## Install Client Dependencies

```bash
cd client
npm install
```

## Install Server Dependencies

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint

GEMINI_API_KEY=your_gemini_api_key
```

---

# ▶️ Run Locally

Start Backend

```bash
cd server
npm run dev
```

Start Frontend

```bash
cd client
npm run dev
```

---

# 🎯 Future Improvements

- User Authentication
- Blog Categories
- Search Functionality
- Like & Bookmark
- Dark Mode
- Rich Text Editor
- Pagination

---

# 👨‍💻 Author

**Minar Hossain**

- GitHub: https://github.com/minar-hossain82
- Portfolio: https://minar-portfolio.vercel.app/
- LinkedIn: www.linkedin.com/in/minar-hossain-450820380

---
