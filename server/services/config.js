require('dotenv').config();

module.exports = {
  endpoint: process.env.CORE_API_URL,
  masterKey: process.env.CORE_API_KEY,

  databaseDefName: 'vikings-db',
  heroContainer: 'heroes',
  villainContainer: 'villains',
  counterContainer: 'counters'
};
