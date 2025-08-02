import express from 'express';
import config from './config/index.js';
import userRouter from './routes/userRoutes.js';
import todosRouter from './routes/todoRoutes.js';

const PORT = process.env.PORT || 3040;
const app = express();

app.use(express.json());
app.use(config);
app.use('/api/user', userRouter);
app.use('/api/todos', todosRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server started on port ${PORT}`);
});
