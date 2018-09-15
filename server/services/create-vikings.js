const cosmos = require('@azure/cosmos');
const { endpoint, masterKey } = require('./config');
const { databaseDefName } = require('./config');
const { data } = require('../models');

const captains = console;
const { heroes } = data;
const { CosmosClient } = cosmos;
const client = new CosmosClient({ endpoint, auth: { masterKey } });
const { heroContainer } = require('./config');

go()
  .then(() => captains.log('Successfully completed!'))
  .catch(err => captains.error(err));

async function go() {
  // Delete the database
  await client.database(databaseDefName).delete();
  captains.log(`deleted database`);

  // Create the database
  const { database } = await client.databases.createIfNotExists({
    id: databaseDefName
  });
  captains.log(`created database ${database.id}`);

  // Create the container
  const containerDefinition = {
    id: heroContainer,
    indexingPolicy: { automatic: false } // turn of indexes
  };
  const { container } = await database.containers.createIfNotExists(
    containerDefinition
  );
  captains.log(`created container ${container.id}`);

  // Insert the items
  /* eslint-disable */
  for (const hero of heroes) {
    const { body } = await container.items.create(hero);
    captains.log(`created item with content: `, body);
  }
  /* eslint-enable */

  // await heroes.forEach(async hero => {
  //   const { body } = await container.items.create(hero);
  //   captains.log(`created item with content: `, body.content);
  // });

  // Read the items
  const { result } = await container.items.readAll().toArray();
  captains.log(result);
}
