# Vikings

Demo App for Vikings - 2018

by [John Papa](http://twitter.com/john_papa)

Angular, Node, Docker, Azure, Cosmos DB/Mongo DB!

Try using 1 of these variations of databases and Node SDKs:

1. Nodejs -> Express -> Mongoose -> Mongo DB
1. Nodejs -> Express -> Mongoose -> Cosmos DB (using Mongo API)
1. Nodejs -> Express -> Cosmos SQL SDK -> Cosmos DB (using SQL API)

You can also try them in Docker containers or running the Node.js app locally.

## Links

Here are all of the slides/code from my presentation at [ngVikings event](https://twitter.com/ngvikingsconf) this week!

- Code: <https://github.com/johnpapa/vikings>
- Angular extensions: <https://aka.ms/ng-essentials>
- Node extensions: <https://aka.ms/vsc-node>
- Free Azure Trial: <https://aka.ms/jp-free>

## Requirements

- Install the Angular CLI

  Only required when running local, _without docker_.

  ```bash
  npm install -g @angular/cli
  ```

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/johnpapa/vikings.git
   cd vikings
   ```

1. Install the npm packages

   ```bash
   npm install
   ```

1. Configure environment settings

Create a file with the following name and location `.env` and copy the contents from
`.env.example` into it. Replace the values with your specific configuration. Don't worry, this
file is in the `.gitignore` so it won't get pushed to github.

Take care not to include extra spaces or quotes. These values are taken verbatum.

```javascript
NODE_ENV=development
PORT=8626
WWW=./

# Toggle which one of these you want to use
#DATA_OPTION=local_mongo
#DATA_OPTION=cloud_cosmos
DATA_OPTION=cloud_cosmos_sdk

CORE_API_KEY=your-core-api-key-goes-here
CORE_API_URL=https://vikings-core.documents.azure.com/?WT.mc_id=javascript-0000-jopapa

USE_LIVE_DATA=yes
MONGO_API_ACCOUNT=vikings
MONGO_API_DB=vikings-db
MONGO_API_KEY=your-mongo-api-key-goes-here
MONGO_API_PORT=10255

# use localhost or your linked docker container (e.g. mongocontainer)
LOCAL_MONGO=localhost
```

## Running the app locally, with live refresh of the client

> This option requires Mongo running locally or in a container via localhost

1. Set the appropriate `.env` file settings

   ```bash
   # e.g. for mongo accessible on localhost
   DATA_OPTION=local_mongo
   LOCAL_MONGO=localhost
   ```

1. Build the Angular app and launch the node server

   ```bash
   ng build
   npm dev-proxy
   ```

1. Open the browser to <http://localhost:8626>

## Running the app locally serving the client app

1. Set the appropriate `.env` file settings

> This option requires Mongo running locally or in a container via localhost

```bash
# e.g. for mongo accessible on localhost
DATA_OPTION=local_mongo
LOCAL_MONGO=localhost
```

1. Build the Angular app and launch the node server

   ```bash
   ng build
   npm run local
   ```

1. Open the browser to <http://localhost:8626>

## Docker

- Install and run [Docker](https://www.docker.com/community-edition)

There are various flavors of the app we can build. See the appropriate sections below.

### Docker Compose with Mongo DB

This contains:

- Mongoose SDK
- Mongo DB in a container with mounted data volume

> This image expects environment variables to be set to point to the database provider (e.g. Mongo DB or Cosmos DB)

    ```bash
    # e.g. Mongo DB in a container
    DATA_OPTION=local_mongo
    USE_LIVE_DATA=yes
    MONGO_API_DB=vikings-db
    # use localhost or your linked docker container (mongocontainer)
    LOCAL_MONGO=mongocontainer
    ```

1. CMD+SHIFT+P `docker: compose up`
1. Select `docker-compose.debug.mongodb.yml`
1. Browse to <http://localhost:7626>

### Docker Compose with Cosmos DB (Mongo API)

This contains:

- Mongoose SDK
- Cosmos DB (Mongo API)

> This image expects environment variables to be set to point to the database provider (e.g. Mongo DB or Cosmos DB)

    ```bash
    # e.g. Mongo DB in a container
    DATA_OPTION=cloud_cosmos
    USE_LIVE_DATA=yes
    MONGO_API_ACCOUNT=vikings
    MONGO_API_DB=vikings-db
    MONGO_API_KEY=your-key
    MONGO_API_PORT=10255
    ```

1. CMD+SHIFT+P `docker: compose up`
1. Select `docker-compose.debug.yml`
1. Browse to <http://localhost:7626>

### Docker Compose with Cosmos DB (SQL API)

This contains:

- Cosmos SQL SDK
- Cosmos DB (SQL API)

> This image expects environment variables to be set to point to the database provider (e.g. Mongo DB or Cosmos DB)

    ```bash
    # e.g. Mongo DB in a container
    DATA_OPTION=cloud_cosmos_sdk
    CORE_API_KEY=your-key
    CORE_API_URL=https://vikings-core.documents.azure.com/?WT.mc_id=javascript-0000-jopapa
    ```

1. CMD+SHIFT+P `docker: compose up`
1. Select `docker-compose.debug.yml`
1. Browse to <http://localhost:7626>

## Deploy to Azure

### Deploy to Azure Requirements

1. Azure account

Free Azure Trial - <https://aka.ms/jp-free>

1. Install the Azure CLI

<https://aka.ms/jp-az>

1. Azure/Node/Docker extensions for VS Code

<https://aka.ms/vsc-node>

### Deploy Docker Image to Azure

1. CMD+SHIFT+P `docker: compose up`
1. Select `docker-compose.yml`
1. Go to the Docker extension in the sidebar and expand `Images`
1. Right click the image and select `tag`
1. Prefix the tag with your container registry name
   e.g Azure container registry `papacr.azurecr.io/johnpapa/vikings:latest`
1. Right click the image and select `push`
1. Expand `Registries / Azure` in the Docker extension in the sidebar
1. Right click the image you pushed and select `deploy to azure app service`
1. Follow the instructions when prompted to choose your server

### Notes

1. Azure Container Registry Login command may be needed

   ```bash
   az acr login --name your-azure-container-registry-name

   # e.g. az acr login --name papacr
   ```

> If you get errors with `az acr login` try running `az account clear`. Then run `az login` again and follow the prompts. Then try again with `az acr login`

## Cosmos DB - Mongo API

1. Create a [CosmosDB instance](https://aka.ms/jp-cosmos-node)

1. Configure Cosmos DB server settings

   In the `.env`, set the `DATA_OPTION` to the appropraite database kind. Then adjust the `MONGO_API` settings shown below, but for your specific configuration.

   ```javascript
   DATA_OPTION = cloud_cosmos;
   USE_LIVE_DATA = yes;
   MONGO_API_ACCOUNT = your_cosmos_account;
   MONGO_API_DB = your_cosmos_db_name;
   MONGO_API_KEY = your_cosmos_db_key;
   MONGO_API_PORT = 10255;
   ```

## Cosmos DB - SQL API

1. Create a [CosmosDB instance](https://aka.ms/jp-cosmos-node)

1. Configure Cosmos DB server settings

   In the `.env`, set the `DATA_OPTION` to the appropraite database kind. Then adjust the `CORE_API` settings shown below, but for your specific configuration.

   ```javascript
   DATA_OPTION = cloud_cosmos_sdk;
   USE_LIVE_DATA = yes;
   CORE_API_KEY = your_cosmos_db_key;
   CORE_API_URL = your_cosmos_db_url;
   ```

> e.g. The url should follow the format <https://yourdatabasename.documents.azure.com/?WT.mc_id=javascript-0000-jopapa>

## Resetting Your Database

There are scripts in the `/meta` folder that will help you clean and repopulate the various databases uing different APIs.

## Debugging

Learn various ways to debug the node and angular app in the [DEBUGGING guide](./DEBUGGING.md).

## Problems or Suggestions

[Open an issue here](https://github.com/johnpapa/vikings/issues)

Create the Docker image that you can `docker push` to a registry. This command uses `docker-compose` to build the image and run the container.

