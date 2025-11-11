# To-Do List App Backend

## Overview
This backend is built with Node.js, Express.js and MongoDB. It exposes RESTful APIs for managing to-do tasks (create, read, update, delete, filter, search).

## Setup
1. Clone the repo.
2. Create `.env` with:
PORT=5000
MONGO_URI=your_mongodb_connection_string

markdown
Copy code
3. Install:
npm install

markdown
Copy code
4. Run:
npm run dev

markdown
Copy code
5. API base: `http://localhost:5000/api/tasks`

## Endpoints (summary)
- `POST /api/tasks` — create task
- `GET /api/tasks` — get all tasks (supports `?status=`, `?priority=`, `?q=search`)
- `GET /api/tasks/:id` — get a task
- `PUT /api/tasks/:id` — update a task
- `PATCH /api/tasks/:id` — partial update
- `DELETE /api/tasks/:id` — delete a task

## Testing
Use Postman to test endpoints. Example requests included in assignment documentation.

## Challenges & Notes
- Input validation using Joi
- Error handling with centralized middleware
- For production, enable authentication (JWT) and proper CORS/security headers