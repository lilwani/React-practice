import { Router } from 'express';

const router = Router();

router.delete('/:id', (req, res) => {
  res.send('User deleted');
});

router.put('/:id/signout', (req, res) => {
  res.send(`User with id ${req.params.id} updated`);
});

export default router;
