// @ts-check
require('dotenv').config(); // eslint-disable-line

const cosmos = require('@azure/cosmos');
const { databaseDefName, endpoint, masterKey } = require('../server/services/cosmos-sdk/config');
const heroes = require('./heroes');
const villains = require('./villains');

const captains = console;
const { CosmosClient } = cosmos;
const client = new CosmosClient({ endpoint, auth: { masterKey } });
const { heroContainer, villainContainer, settingsContainer } = require('../server/services/cosmos-sdk/config');

go()
  .then(() => captains.log('Successfully completed!'))
  .catch(err => captains.error(err));

async function go() {
  // Delete the database
  console.log(heroContainer);
  await client.database(databaseDefName).delete();
  captains.log(`deleted database`);

  // Create the database
  const { database } = await client.databases.createIfNotExists({
    id: databaseDefName,
  });
  captains.log(`created database ${database.id}`);

  await bulkCreate(database, heroContainer, heroes);
  await bulkCreate(database, villainContainer, villains);
  await bulkCreate(database, settingsContainer, [{ name: 'Cosmos Core/SQL API' }]);
}

async function bulkCreate(database, containerDef, items) {
  // Create the container
  const containerDefinition = {
    id: containerDef,
    indexingPolicy: { automatic: false }, // turn of indexes
  };
  const { container } = await database.containers.createIfNotExists(
    containerDefinition,
  );
  captains.log(`created container ${container.id}`);

  // Insert the items
  /* eslint-disable */
  for (const item of items) {
    const { body } = await container.items.create(item);
    captains.log(`created item with content: `, body);
  }
  /* eslint-enable */

  // Read the items
  const { result } = await container.items.readAll().toArray();
  captains.log(result);
}
