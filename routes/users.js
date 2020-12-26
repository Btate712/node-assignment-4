const express = require('express');

const router = express.Router();
const users = [];

router.get('/users', (req, res) => {
  res.render('userIndex', { pageTitle: "users", users: users });
});

router.get('/', (req, res) => {
  res.render("newUser", { pageTitle: "New User" });
});

router.post('/users', (req, res) => {
  users.push(req.body.name);
  res.redirect('/users');
});

module.exports = router;