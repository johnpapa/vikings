// @ts-check
const mongoose = require('mongoose');
const {
  mongoApiKey,
  mongoApiAccount,
  mongoApiPort,
  mongoDb,
} = require('./config');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const key = encodeURIComponent(mongoApiKey);
const mongoOnCosmosUri = `mongodb://${mongoApiAccount}:${key}@${mongoApiAccount}.documents.azure.com:${mongoApiPort}/${mongoDb}?ssl=true`;
const mongoUri = `mongodb://localhost:27017/heroes-db`;
let dbUri = '';

if (process.env.DATA_OPTION === 'local_mongo') {
  dbUri = mongoUri;
} else {
  dbUri = mongoOnCosmosUri;
}

function connect() {
  if (process.env.USE_LIVE_DATA === 'yes') {
    mongoose.set('debug', true);
    return mongoose.connect(
      dbUri,
      { useNewUrlParser: true },
    );
  }
  return null;
}

module.exports = { mongoose, connect };
