# 🛠 Admin Panel (MERN Stack)

This is a **full-stack Admin Panel** project built using the **MERN stack**  
(**MongoDB**, **Express.js**, **React.js**, **Node.js**).

It provides an **Admin Dashboard** to manage:
- Doctors & Patients
- Appointments
- Specialties
- Products & Coupons
- Concerns & Referrals
- Wallet & Refunds

---

## 🚀 Features

### 🔹 Backend (Node.js + Express + MongoDB)
- JWT Authentication & Authorization
- Modular MVC Architecture
- MongoDB with Mongoose ODM
- Image upload support
- Centralized Error Handling
- CORS Enabled for API calls


🎯 Purpose
The goal of this project is to create a centralized admin system where the administrator can:

Manage doctors and patients

View and schedule appointments

Handle products and coupon codes

Manage wallet transactions, refunds, and referrals

Monitor healthcare concerns and specialties




🔹 Key Highlights
Authentication & Authorization – Secure login system using JWT.

Dynamic Dashboard – Real-time updates from backend API.

Scalable API Architecture – Separate route files for each module (doctors, patients, etc.).

File Upload Support – For profile pictures, product images, etc.

Error Handling – Centralized and consistent across API.

Mobile Responsive UI – Works on desktops, tablets, and smartphones.








### 🔹 Frontend (React.js)
- Responsive Dashboard UI
- Sidebar Navigation
- Axios API service with JWT token handling
- CRUD pages for doctors, patients, appointments, and more

---

## 📂 Project Structure

project-root/
├── backend/ # Node.js + Express API
│ ├── config/ # DB & JWT config
│ ├── controllers/ # Business logic
│ ├── middleware/ # Auth & error handlers
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API endpoints
│ ├── uploads/ # Uploaded files
│ └── server.js # Server entry point
│
└── frontend/ # React.js App
├── public/ # Public assets
├── src/
│ ├── assets/ # Images & static files
│ ├── components/ # Navbar, Sidebar, etc.
│ ├── layouts/ # Layout components
│ ├── pages/ # Page components
│ ├── services/ # API calls (Axios)
│ └── App.js


## ⚙️ Installation & Setup

Backend:

cd backend
npm install
npm start
Backend runs on: http://localhost:5000
Mongodb connected

Create .env

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=
PORT=5000

Frontend:

cd ../frontend
npm install
npm run dev
Frontend runs on: http://localhost:5174

## API Testing
GET http://localhost:5000/api/test



🛠 Tech Stack
Frontend: React.js, Axios

Backend: Node.js, Express.js

Database: MongoDB + Mongoose

Auth: JWT

Other: CORS, dotenv



github-link-
vercel-link-



📜 License
MIT License


---

This combined README will look professional on GitHub and guide anyone through both **backend and frontend setup** without confusion.  



