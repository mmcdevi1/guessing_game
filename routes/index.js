const express = require('express');
const routes  = express.Router();

routes.get('/', function (req, res) {
  res.render('index');
});

routes.get('/settings', function (req, res) {
  res.render('settings')
})

module.exports = routes;
