const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo-list-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connected'))
.catch((err) => console.log('Database connection error', err));

module.exports = mongoose;
