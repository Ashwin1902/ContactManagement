# Contact Management System

A full-stack contact management system built with **ReactJS**, **Material UI (MUI)** for the frontend, and **Node.js** with **MongoDB (via Mongoose)** for the backend. This system allows users to manage their contacts with functionalities such as adding, updating, deleting, and viewing contact details.

## Features

- **Frontend (ReactJS)**:
  - Contact form for adding new contacts.
  - A table displaying all contacts with sorting, pagination, and actions (edit and delete).
  - Edit modal for updating contact information.
  
- **Backend (Node.js with Express)**:
  - API endpoints for CRUD operations on contacts.
  - Validation and error handling for input fields.

## Tech Stack

- **Frontend**: ReactJS, Material UI (MUI)
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **API Communication**: Axios
- **State Management**: React Hooks

---

## Project Setup

### Prerequisites

Make sure you have the following installed:
- **Node.js** and **npm**: [Install Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community) or use a MongoDB Atlas cluster.

---

### Backend Setup (Node.js + MongoDB)

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/contact-management.git
   cd contact-management/backend
2. **Install backend dependencies**:

```bash
npm install
```
Create a .env file in the backend directory and add your MongoDB connection string:
makefile
MONGO_URI=your_mongo_connection_string
PORT=5000

3.**Start the backend server**:

```bash
npm run start
```
The backend server will run on http://localhost:5000.

### Frontend Setup (ReactJS + MUI)
4.**Navigate to the frontend directory**:

```bash
cd ../frontend
```
Install frontend dependencies:

```bash
npm install
```
Start the frontend development server:

```bash
npm run dev
```
The frontend will run on http://localhost:5173.
