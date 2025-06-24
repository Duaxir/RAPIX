const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.json({ message: 'Welcome to the Users API!' });
});

module.exports = router;