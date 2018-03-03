# Vikings

Demo App from ngVikings 2018

by [John Papa](http://twitter.com/john_papa)

Angular, Node, Docker, Azure!

## Links

Here are all of the slides/code from my presentation at [ngVikings event](https://twitter.com/ngvikingsconf) this week!

* Slides: http://slides.com/johnpapa/vikings2018
* Code: https://github.com/johnpapa/vikings
* Angular extensions https://aka.ms/ng-essentials
* Node extensions: https://aka.ms/vsc-node
* Free Azure Trial - https://aka.ms/jp-free

## Requirements

1. Install the Angular CLI

   ```bash
   npm install -g @angular/cli
   ```

1. Install the [Azure CLI](https://aka.ms/jp-az)

1. Create a [CosmosDB instance](https://aka.ms/jp-cosmos-node)

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/johnpapa/vikings.git
   cd angular-cosmosdb
   ```

1. Install the npm packages

   ```bash
   npm i
   ```

1. Configure Cosmos DB server settings

   Create a file with the following name and location `.env` and copy the contents from
   `.env.example` into it. Replace the values with your specific configuration. Don't worry, this
   file is in the `.gitignore` so it won't get pushed to github.

   Take care not to include extra spaces or quotes. These values are taken verbatum.

   ```javascript
    NODE_ENV=development

    PORT=3001
    PUBLICWEB=./publicweb

    COSMOSDB_ACCOUNT=your_cosmos_account
    COSMOSDB_DB=your_cosmos_db
    COSMOSDB_KEY=your_cosmos_key
    COSMOSDB_PORT=10255
   ```

## Running the app locally

1. Build the Angular app and launch the node server

   ```bash
   ng build
   npm dev-proxy
   ```

1. Open the browser to <http://localhost:3001>

## Docker

* Install and run [Docker](https://www.docker.com/community-edition)

### Docker Compose

Create the Docker image that you can `docker push` to a registry. This commands uses `docker-compose` to build the image and run the container.

> This image expects environment variables to be set in whichever cloud provider you push to.

```bash
npm run docker-up
```

### Docker Compose with Debugging

Create the Docker image and run it locally. This commands uses `docker-compose` to build the image and run the container.

This uses your `.env` settings and opens port `9229` for debugging.

```bash
npm run docker-debug
open http://localhost:3001
```

Open VS Code, launch the `Docker: Attach to Node` debugging profile

## Problems or Suggestions

[Open an issue here](https://github.com/johnpapa/angular-cosmos/issues)

## Notes

Azure Continer Registry Login command is needed if we push to it.

```bash
az acr login --name your-azure-container-registry-name
```