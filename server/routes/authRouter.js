import { Router } from 'express';
import { users } from '../users';
import getUserTodos from '../Appsvc/todos';

const router = Router();

router.post('/signup', (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const existingUser = users.find((user) => user.email === email);
      if (!existingUser) {
        console.log(`Add new user with email ${email}`);
        const newUser = { userId: users.length + 1, email, password };
        const accessToken = generateAccessToken(newUser.userId);
        const refreshToken = generateAccessToken(newUser.userId);
        newUser.token = [refreshToken];
        users.push(newUser);
        res.status(200).send({
          errorStatus: false,
          data: { token: accessToken, userId: newUser.userId },
        });
      } else {
        res.status(404).send({
          errorStatus: true,
          data: { error: `User with email ${email} already exists` },
        });
      }
    } else {
      console.log(`Email or password not provided`);
      res.status(400).send({
        errorStatus: true,
        data: { error: `Email or password not provided` },
      });
    }
  } catch (error) {
    console.error(`Error occured : ${error.message}`);
    res
      .status(error.status || 500)
      .send({ errorStatus: true, data: { error: error.message } });
  }
});

router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        console.log(`User with email ${email} found`);
        const accessToken = generateAccessToken(existingUser.userId);
        const refreshToken = generateAccessToken(existingUser.userId);
        const todos = getUserTodos(existingUser.userId);
        existingUser.token = [refreshToken];
        res.status(200).send({
          errorStatus: false,
          data: { token: accessToken, userId: existingUser.userId, todos },
        });
      } else {
        res.status(404).send({
          errorStatus: true,
          data: { error: `User with email ${email} not found` },
        });
      }
    } else {
      console.log(`Email or password not provided`);
      res.status(400).send({
        errorStatus: true,
        data: { error: `Email or password not provided` },
      });
    }
  } catch (error) {
    console.error(`Error occured : ${error.message}`);
    res
      .status(error.status || 500)
      .send({ errorStatus: true, data: { error: error.message } });
  }
});

export default router;
