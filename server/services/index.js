const cosmosSDK = require('./cosmos-sdk');
const mongo = require('./mongo');

let useCosmosSDK = false;

const captains = console;
switch (process.env.DATA_OPTION) {
  case 'cloud_cosmos':
    useCosmosSDK = false;
    captains.log(`Using Cosmos with the Mongo API`);
    break;

  case 'cloud_cosmos_sdk':
    useCosmosSDK = true;
    captains.log(`Using Cosmos with the Cosmos SDK`);
    break;

  case 'local_mongo':
    useCosmosSDK = false;
    captains.log(`Using Mongo`);
    break;

  default:
    break;
}

module.exports = {
  heroService: useCosmosSDK ? cosmosSDK.heroService : mongo.heroService,
  villainService: useCosmosSDK ? cosmosSDK.villainService : mongo.villainService,
  settingsService: useCosmosSDK ? cosmosSDK.settingsService : mongo.settingsService,
};
