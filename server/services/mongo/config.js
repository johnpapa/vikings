// @ts-check
// require('dotenv').config();

module.exports = {
  mongoApiAccount: process.env.MONGO_API_ACCOUNT,
  mongoApiPort: process.env.MONGO_API_PORT,
  mongoDb: process.env.MONGO_API_DB,
  mongoApiKey: process.env.MONGO_API_KEY,

  localMongo: process.env.LOCAL_MONGO || 'localhost',
};
