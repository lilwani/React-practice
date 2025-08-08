import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateAccessToken = (user) => {
  try {
    console.log(`Generating access token for user: ${user.id}`);
    const token = jwt.sign({ UID: user.id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '15m',
    });
  } catch (error) {
    console.error(`Error occured : ${error.message}`);
    throw new Error('Failed to generate access token');
  }
};

const generateRefreshToken = (user) => {
  try {
    console.log(`Generating refresh token for user: ${user.id}`);
    const token = jwt.sign({ UID: user.id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '15m',
    });
  } catch (error) {
    console.error(`Error occured : ${error.message}`);
    throw new Error('Failed to generate refresh token');
  }
};

const verifyAccessToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.verifiedUser = decoded;
    next();
  } catch (error) {
    console.error(`Error occured : ${error.message}`);
    res
      .status(error.status || 401)
      .send({ errorStatus: true, data: { error: error.message } });
  }
};

export { generateAccessToken, generateRefreshToken, verifyAccessToken };
