import { Router } from 'express';
import { users } from '../users';
import jwt from 'jsonwebtoken';
import { generateAccessToken } from '../Appsvc/auth';

const router = Router();

router.post('/refresh-token', (req, res) => {
  try {
    const { userId } = req.body;
    if (userId) {
      console.log(`Grab token for ${userId} from user list`);
      const userObj = users.find((item) => item.id === userId);
      if (userObj) {
        console.log(`User with id ${userId} found`);
        const refTokenData = jwt.verify(
          userObj.token[userObj.token.length - 1],
          process.env.REFRESH_TOKEN_SECRET
        );
        console.log(`Refresh token data : ${JSON.stringify(refTokenData)}`);
        const newAccessToken = generateAccessToken({ id: userId });
        console.log(`New access token generated for user ${userId}`);
        return res.status(200).json({ accessToken: newAccessToken });
      } else {
        console.log(`User with id ${userId} not found`);
        return res.status(404).send('User not found');
      }
    }
  } catch (error) {
    console.error(`Error occured : ${error.message}`);
    res.status(500).send('Failed to refresh token');
  }
});
