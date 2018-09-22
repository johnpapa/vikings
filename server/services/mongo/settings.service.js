// @ts-check
const { ReadPreference } = require('mongodb');
const Settings = require('./settings.model');
const { connect } = require('./db');

connect();

function getSettings(req, res) {
  const docquery = Settings.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(settings => res.status(200).json(settings))
    .catch(error => res.status(500).send(error));
}

module.exports = {
  getSettings,
};
