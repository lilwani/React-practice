import { Router } from 'express';
import getUserTodos from '../Appsvc/todos';
import { verifyAccessToken } from '../Appsvc/auth';

const router = Router();

router.get('/', verifyAccessToken, (req, res) => {
  try {
    const { userId } = req.verifiedUser;
    const userTodos = getUserTodos(userId);
    res.status(200).send({
      errorStatus: false,
      data: {
        todos: userTodos,
        userId,
      },
    });
  } catch (error) {
    console.error(`Error occured : ${error.message}`);
    res.status(500).send({
      errorStatus: true,
      data: {
        error: error.message,
      },
    });
  }
});

router.post('/new', (req, res) => {
  res.send('New Todo added');
});

router.delete('/:id', (req, res) => {
  res.send(`Todo with id ${req.params.id} deleted`);
});

router.put('/:id', (req, res) => {
  res.send(`Todo with id ${req.params.id} updated`);
});

export default router;
