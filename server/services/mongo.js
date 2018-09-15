const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const key = encodeURIComponent(process.env.MONGO_API_KEY);
const mongoUri = `mongodb://${process.env.MONGO_API_ACCOUNT}:${key}@${
  process.env.MONGO_API_ACCOUNT
}.documents.azure.com:${process.env.MONGO_API_PORT}/${
  process.env.MONGO_API_DB
}?ssl=true`;
// Local MongoDB Connection String
// const mongoUri = `mongodb://localhost:27017/heroes-db`;

function connect() {
  if (process.env.USE_LIVE_DATA === 'yes') {
    console.log('using a live database!');
    mongoose.set('debug', true);
    return mongoose.connect(
      mongoUri,
      { useNewUrlParser: true }
    );
  }
  return;
}

module.exports = {
  connect,
  mongoose
};
