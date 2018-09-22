// @ts-check
const mongoose = require('mongoose');
const {
  mongoApiKey,
  mongoApiAccount,
  mongoApiPort,
  mongoDb,
  localMongo,
} = require('./config');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const key = encodeURIComponent(mongoApiKey);
const mongoOnCosmosUri = `mongodb://${mongoApiAccount}:${key}@${mongoApiAccount}.documents.azure.com:${mongoApiPort}/${mongoDb}?ssl=true`;
const mongoUri = `mongodb://${localMongo}:27017/vikings-db`;
let dbUri = '';

if (process.env.DATA_OPTION === 'local_mongo') {
  dbUri = mongoUri;
} else {
  dbUri = mongoOnCosmosUri;
}

function connectWithRetry() {
  if (process.env.USE_LIVE_DATA === 'yes') {
    mongoose.set('debug', true);
    return mongoose.connect(
      dbUri,
      { useNewUrlParser: true },
    ).then(() => {
      console.log('MongoDB is connected');
    }).catch((err) => {
      console.log('MongoDB connection unsuccessful, retry after 5 seconds.', err);
      setTimeout(connectWithRetry, 5000);
    });
  }
  return null;
}

function connect() {
  connectWithRetry();
}

process.on('SIGINT', () => {
  // If the Node process ends, close the Mongoose connection
  mongoose.connection.close(() => {
    console.log('Mongoose default connection is disconnected due to application termination');
    process.exit(0);
  });
});

module.exports = { mongoose, connect };
