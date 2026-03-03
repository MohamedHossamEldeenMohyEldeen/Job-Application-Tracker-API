# Task Manager API 📝

A simple REST API built with **Node.js** and **Express.js** for managing tasks. Built as a learning project to practice Express routing, middleware, and REST principles.

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- Postman or Thunder Client to test the API

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Start the server
node server.js
```

Server will run on `http://localhost:3000`

---

## 📁 Project Structure

```
├── server.js          # Entry point, middleware setup
└── routes/
    └── tasks.js       # All task routes and logic
```

---

## 🛣️ API Endpoints

Base URL: `/api/todo`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todo` | Get all tasks |
| GET | `/api/todo/:id` | Get a single task by ID |
| POST | `/api/todo` | Create a new task |
| PUT | `/api/todo/:id` | Update an existing task |
| DELETE | `/api/todo/:id` | Delete a task |

---

## 📬 Request & Response Examples

### GET /api/todo
Returns all tasks.

**Response `200`**
```json
[
  {
    "id": 1,
    "title": "First Task",
    "task": "Programming"
  }
]
```

---

### GET /api/todo/:id
Returns a single task by ID.

**Response `200`**
```json
{
  "id": 1,
  "title": "First Task",
  "task": "Programming"
}
```

**Response `404`**
```json
{ "msg": "Task Not Found" }
```

---

### POST /api/todo
Creates a new task.

**Request Body**
```json
{
  "title": "New Task",
  "task": "Do something"
}
```

**Response `201`**
```json
{
  "id": 4,
  "title": "New Task",
  "task": "Do something"
}
```

**Response `400`**
```json
{ "msg": "Data Type Is Not Valid" }
```

---

### PUT /api/todo/:id
Updates an existing task. You can update `title`, `task`, or both.

**Request Body**
```json
{
  "title": "Updated Title",
  "task": "Updated task"
}
```

**Response `200`**
```json
{
  "id": 1,
  "title": "Updated Title",
  "task": "Updated task"
}
```

---

### DELETE /api/todo/:id
Deletes a task by ID.

**Response `200`**
```json
{
  "task removed": {
    "id": 1,
    "title": "First Task",
    "task": "Programming"
  }
}
```

---

## 🛠️ Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

---

## 📌 Notes

- Data is stored **in-memory** — restarting the server resets all tasks
- No database used (PostgreSQL integration coming soon)

---

## 👨‍💻 Author

Built while learning Express.js following the backend developer roadmap.