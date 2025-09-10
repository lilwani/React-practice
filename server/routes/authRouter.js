import { Router } from 'express';
import { users } from '../users.js';
import getUserTodos from '../Appsvc/todos/index.js';
import {
  generateAccessToken,
  generateRefreshToken,
} from '../Appsvc/auth/index.js';

const router = Router();

router.post('/signup', (req, res) => {
  try {
    console.log(`Signup request received`);
    const { email, password } = req.body;
    if (email && password) {
      const existingUser = users.find((user) => user.email === email);
      if (!existingUser) {
        console.log(`Add new user with email ${email}`);
        const newUser = {
          id: users.length + 1,
          email,
          password,
          name: 'default',
        };
        const accessToken = generateAccessToken(newUser);
        const refreshToken = generateRefreshToken(newUser);
        newUser.token = [refreshToken];
        users.push(newUser);
        console.log('User reigistered successfully');
        res.status(200).send({
          errorStatus: false,
          result: {
            token: accessToken,
            user: {
              userID: newUser.id,
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
    console.log(`Login request received`);
    const { email, password } = req.body;
    console.log(`req.body is ${JSON.stringify(req.body)}`);
    if (email && password) {
      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        console.log(`User with email ${email} found`);
        const accessToken = generateAccessToken(existingUser);
        const refreshToken = generateRefreshToken(existingUser);
        const todos = getUserTodos(existingUser.id);
        existingUser.token = [refreshToken];
        console.log('User logged in successfully', existingUser);
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
