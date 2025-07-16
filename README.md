# 📝 Task Management App (MERN Stack)

A simple and responsive task management system built using the **MERN (MongoDB, Express, React, Node.js)** stack. Users can create, update, delete, and filter tasks based on their status (pending/completed).

## 🔧 Features

- Create, edit, and delete tasks
- Mark tasks as pending or completed
- Filter tasks by status
- View full task details
- Toast notifications for feedback
- Responsive UI with Tailwind CSS
- MongoDB Atlas integration

## 📁 Project Structure

```
TaskManagement/
├── backendServer/            # Node.js + Express + MongoDB backend
├── client/                   # React + Tailwind CSS frontend
├── .env                      # Environment variables
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Atlas account
- Git

### 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/waji1234/TaskManagement.git
cd TaskManagement
```

2. **Backend setup:**

```bash
cd backendServer
npm install
```

3. **Frontend setup:**

```bash
cd ../client
npm install
```

4. **Environment Variables**

Create a `.env` file in both frontend and backend directories:

**Backend `.env`**
```env
PORT=5000
MONGO_URI=mongodb+srv://waji121600:waji1234@taskmanagement.qwntmyo.mongodb.net/taskdb?retryWrites=true&w=majority&appName=TaskManagement
```

**Frontend `.env`**
```env
VITE_API_BASE_URL=http://localhost:5000


## ▶️ Running the App

### Start Backend

```bash
cd backendServer
npm run dev
```

### Start Frontend

```bash
cd client
npm start
```

The app will be running at `http://localhost:3000`

## 📡 API Endpoints

| Method | Endpoint        | Description                |
|--------|-----------------|----------------------------|
| GET    | `/api/tasks`    | Get all tasks              |
| GET    | `/api/tasks?status=pending` | Get pending tasks     |
| GET    | `/api/tasks?status=completed` | Get completed tasks   |
| GET    | `/api/tasks/:id`| Get single task by ID      |
| POST   | `/api/tasks`    | Create a new task          |
| PUT    | `/api/tasks/:id`| Update task by ID          |
| DELETE | `/api/tasks/:id`| Delete task by ID          |
```

## 🧰 Tech Stack

- **Frontend:** React, Tailwind CSS, Axios, React Router, React Toastify
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas + Mongoose

## 📸 Screenshots

> _(Add screenshots here if available for UI demo)_

## 📄 License

MIT License

## 🙌 Author

Developed by [Wajahat Khan](https://github.com/waji1234)
