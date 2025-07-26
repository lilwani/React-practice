import express from 'express';
const app = express();

const PORT = process.env.PORT || 3040;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server started on port ${PORT}`);
});
