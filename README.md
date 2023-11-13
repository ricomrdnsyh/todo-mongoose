# TodoList API

This is the documentation for the Todo List API

# Getting Started
### Prerequisites
 - Node.js
 - npm
 - Database(MongooDB)
   
### Instalation
1. Clone the repository:
   
    `git clone`
2. Change to the project directory:

    `cd todo-mongoose`
3. Install dependencies:

    `npm install`
4. Start the server:

    `npm run dev`

# API Endpoints
### Authentication
- **POST** /api/users : Register a new user.
- **POST** /api/auth/login : Authenticate a user and receive a JWT token for secure routes.

### Todo
- **GET** /api/todos : Retrieve all todo.
- **POST** /api/todos : Create a new todo.
- **GET** /api/todos/:id : Retrieve a specific todo by ID.
- **PUT** /api/todos/:id : Update a specific todo by ID.
- **DELETE** /api/todos/:id : Delete a specific todo by ID.
