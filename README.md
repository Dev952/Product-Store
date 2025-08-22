# 🛍️ Product Store

A full-stack e-commerce web application built using the **MERN stack** (MongoDB, Express, React, Node.js).  
This project allows users to view, create, and manage products in a simple product management store.

🔗 **Live Demo**: [Product Store](https://product-store-w9r0.onrender.com/)

---

## 🧰 Tech Stack

### Frontend:
- React.js
- Chakra UI 
- React Router

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose

---

## 📦 Features

- 🔍 View all products  
- 🛒 Add new products  
- ✏️ Edit existing products  
- 🗑️ Delete products  
- 🌐 RESTful API integration  
- ⚡ Fast and responsive UI  
- 📦 Image upload support (optional)  

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB
- Git
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/your-username/product-store.git
cd product-store
🏗️ Project Structure
csharp
Copy
Edit
product-store/
├── backend/          # Node + Express + MongoDB
│   ├── server.js
│   ├── models/
│   ├── routes/
│   └── controllers/
├── frontend/         # React frontend
│   ├── src/
│   └── public/
├── .gitignore
├── package.json
└── README.md
⚙️ Installation
Backend Setup
bash
Copy
Edit
cd backend
npm install
npm run dev
➡️ Make sure MongoDB is running locally

Create a .env file inside backend/ with:

ini
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/productstore
Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
➡️ Frontend will run on http://localhost:3000 and backend on http://localhost:5000.

📷 Screenshots
Home Page

Create Product

📚 API Endpoints
Method	Route	Description
GET	/api/products	Get all products
POST	/api/products	Create new product
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product

🧑‍💻 Author
Dev Trivedi
🔗 LinkedIn

📄 License
This project is licensed under the MIT License.


Edit

Do you want me to also include a **"Deployment" section** in this same file that exp
