import { Router } from 'express';
import { users } from '../users.js'
import getUserTodos from '../Appsvc/todos/index.js';

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
          result: {
            token: accessToken,
            user: {
              userID: newUser.userId,
              email: newUser.email,
              name: 'default',
              age: 100,
            },
          },
        });
      } else {
        res.status(404).send({
          errorStatus: true,
          result: { error: `User with email ${email} already exists` },
        });
      }
    } else {
      console.log(`Email or password not provided`);
      res.status(400).send({
        errorStatus: true,
        result: { error: `Email or password not provided` },
      });
    }
  } catch (error) {
    console.error(`Error occured : ${error.message}`);
    res
      .status(error.status || 500)
      .send({ errorStatus: true, result: { error: error.message } });
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
          result: {
            token: accessToken,
            user: {
              userID: existingUser.id,
              name: 'default',
              email: existingUser.email,
              age: 100,
            },
            todos,
          },
        });
      } else {
        res.status(404).send({
          errorStatus: true,
          result: { error: `User with email ${email} not found` },
        });
      }
    } else {
      console.log(`Email or password not provided`);
      res.status(400).send({
        errorStatus: true,
        result: { error: `Email or password not provided` },
      });
    }
  } catch (error) {
    console.error(`Error occured : ${error.message}`);
    res
      .status(error.status || 500)
      .send({ errorStatus: true, result: { error: error.message } });
  }
});

export default router;
