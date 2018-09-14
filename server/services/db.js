const cosmos = require('@azure/cosmos');
const {
  databaseDefName,
  endpoint,
  // heroContainer,
  masterKey
} = require('./config');

const { CosmosClient } = cosmos;

const client = new CosmosClient({ endpoint, auth: { masterKey } });

async function getDatabase() {
  const database = await client.database(databaseDefName);
  return database;
}

module.exports = {
  getDatabase
};
