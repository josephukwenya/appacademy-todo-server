const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000; 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRouter = require('./routes/auth.route');
const todoRouter = require('./routes/todos.route');

// Add your routes and middleware here
app.get('/', (req, res) => {
  res.send('Hello');
})

app.use('/api/v1/auth/', authRouter);
app.use('./api/v1/todos/', todoRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
