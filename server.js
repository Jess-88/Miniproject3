// const Todo = require('./Todo');

// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const Todo = require('./Todo');

// const app = express();
// const PORT = process.env.PORT || 4000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/todo-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;

// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully');
// });

// // Routes
// const todosRouter = express.Router();

// todosRouter.route('/').get((req, res) => {
//   Todo.find((err, todos) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(todos);
//     }
//   });
// });

// todosRouter.route('/:id').get((req, res) => {
//   const id = req.params.id;
//   Todo.findById(id, (err, todo) => {
//     res.json(todo);
//   });
// });

// todosRouter.route('/add').post((req, res) => {
//   const todo = new Todo({
//     title: req.body.title,
//     description: req.body.description,
//     priority: req.body.priority,
//     completed: req.body.completed,
//   });

//   todo
//     .save()
//     .then((todo) => {
//       res.status(200).json({ todo: 'todo added successfully' });
//     })
//     .catch((err) => {
//       res.status(400).send('adding new todo failed');
//     });
// });

// todosRouter.route('/update/:id').post((req, res) => {
//   Todo.findById(req.params.id, (err, todo) => {
//     if (!todo) {
//       res.status(404).send('data is not found');
//     } else {
//       todo.title = req.body.title;
//       todo.description = req.body.description;
//       todo.priority = req.body.priority;
//       todo.completed = req.body.completed;

//       todo
//         .save()
//         .then((todo) => {
//           res.json('Todo updated!');
//         })
//         .catch((err) => {
//           res.status(400).send('Update not possible');
//         });
//     }
//   });
// });

// app.use('/todos', todosRouter);

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./Todo');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todoapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// API routes
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (err) {
    console.log(err);
  }
});

app.post('/api/todos', async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    completed: req.body.completed,
  });
  try {
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    console.log(err);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
