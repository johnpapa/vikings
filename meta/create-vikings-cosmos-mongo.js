// @ts-check
require('dotenv').config(); // eslint-disable-line
process.env.DATA_OPTION = 'cloud_cosmos'; // this must go before importing db.js

const Hero = require('../server/services/mongo/hero.model');
const Villain = require('../server/services/mongo/villain.model');
const Settings = require('../server/services/mongo/settings.model');
const heroes = require('./heroes');
const villains = require('./villains');

const settings = [{ name: 'Cosmos Mongo API' }];

const captains = console;
const { mongoose, connect } = require('../server/services/mongo/db');

process.env.DATA_OPTION = 'cloud_cosmos';

connect();

go().then(() => {
  captains.log('done!');
  mongoose.connection.close(() => {
    console.log('Mongoose default connection is disconnected due to application termination');
    process.exit(0);
  });
});

async function go() {
  await refreshDocuments(Hero, 'heroes', heroes);
  await refreshDocuments(Villain, 'villains', villains);
  await refreshDocuments(Settings, 'settings', settings);
}

async function refreshDocuments(model, collection, documents) {
  // Delete the collections
  return mongoose.connection.dropCollection(collection)
    // Insert the items
    .then(() => model.insertMany(documents))
    // Read the items
    .then(() => model.find({}))
    .then(docs => captains.log(`reading content: `, docs));
}
