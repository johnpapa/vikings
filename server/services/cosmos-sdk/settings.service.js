// @ts-check
const client = require('./db');
const { databaseDefName, settingsContainer } = require('./config');

const container = client.database(databaseDefName).container(settingsContainer);

async function getSettings(req, res) {
  try {
    const { result: settings } = await container.items.readAll().toArray();
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getSettings,
};
