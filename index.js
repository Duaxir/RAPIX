const express = require('express');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/v1', usersRouter);
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});