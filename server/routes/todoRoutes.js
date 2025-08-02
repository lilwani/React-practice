import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('All todos for a user');
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
