import { Router } from 'express';

const router = Router();

router.get('/login', (req, res) => {
  res.send('Returned user data');
});

router.post('/signup', (req, res) => {
  res.send('Added new user');
});

router.delete('/:id', (req, res) => {
  res.send('User deleted');
});

router.put('/:id/signout', (req, res) => {
  res.send(`User with id ${req.params.id} updated`);
});

export default router;
