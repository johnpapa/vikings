const express = require('express');
const services = require('../services');

const router = express.Router();
const { settingsService } = services;

router.get('/settings', (req, res) => {
  settingsService.getSettings(req, res);
});

module.exports = router;
