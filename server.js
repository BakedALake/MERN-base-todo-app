const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

// Models
let Todo = require('./todoModel')

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection has been established!");
});

// Endpoints
// Get all
todoRoutes.route('/').get(function (req, res) {
    Todo.find(function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

// Get one
todoRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Todo.findById(id, function (err, todo) {
        res.json(todo);
    });
});

// Create
todoRoutes.route('/add').post(function (req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({ 'todo': 'Todo has been added!' });
        })
        .catch(err => {
            res.status(400).json({ 'todo': 'Addition has fail.' })
        });
});

// Update
todoRoutes.route('/update/:id').post(function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
        if (!todo) {
            res.status(400).send('Data was not found!');
        } else {
            todo.todo_description = req.body.todo_description;
            todo.todo_responsibility = req.body.todo_responsibility;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo has been updated!');
            })
            .catch(err => {
                res.status(400).send("There was an error updating.");
            });
        }
    });
});

// Express router
app.use('/todos', todoRoutes);

// Listen
app.listen(PORT, function () {
    console.log("Server is running on port: " + PORT);
});