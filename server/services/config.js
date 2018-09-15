require('dotenv').config();

module.exports = {
  endpoint: process.env.CORE_DB_URL,
  masterKey: process.env.CORE_DB_KEY,

  databaseDefName: 'vikings-db',
  heroContainer: 'heroes',
  villainContainer: 'villains',
  counterContainer: 'counters',
};
