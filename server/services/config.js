require('dotenv').config();

module.exports = {
  endpoint: process.env.DB_URL,
  masterKey: process.env.DB_KEY,

  databaseDefName: 'vikings-db',
  heroContainer: 'heroes',
  villainContainer: 'villains',
  counterContainer: 'counters',
};
