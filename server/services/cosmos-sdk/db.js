// @ts-check
const cosmos = require('@azure/cosmos');
const { endpoint, masterKey } = require('./config');

const { CosmosClient } = cosmos;
const client = new CosmosClient({ endpoint, auth: { masterKey } });

module.exports = client;
