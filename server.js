const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

const authRouter = require('./routes/authRoutes');
const todoRouter = require('./routes/todoRoutes');

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'https://appacademy-todoapp.vercel.app' }));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json('App Academy Todo Web App!!!!');
});

app.use('/api/v1/users', authRouter);
app.use('/api/v1/todos', todoRouter);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
