const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.end('home');
});

module.exports = router;
