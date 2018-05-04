# Vikings

Demo App from ngVikings 2018

by [John Papa](http://twitter.com/john_papa)

Angular, Node, Docker, Azure!

## Links

Here are all of the slides/code from my presentation at [ngVikings event](https://twitter.com/ngvikingsconf) this week!

* Slides: <http://slides.com/johnpapa/vikings2018>
* Code: <https://github.com/johnpapa/vikings>
* Angular extensions: <https://aka.ms/ng-essentials>
* Node extensions: <https://aka.ms/vsc-node>
* Free Azure Trial: <https://aka.ms/jp-free>

## Requirements

* Install the Angular CLI

  Only required when running local, _without docker_.

  ```bash
  npm install -g @angular/cli
  ```

## Getting Started

1.  Clone this repository

    ```bash
    git clone https://github.com/johnpapa/vikings.git
    cd vikings
    ```

1.  Install the npm packages

    ```bash
    npm install
    ```

1.  Configure environment settings

    Create a file with the following name and location `.env` and copy the contents from
    `.env.example` into it. Replace the values with your specific configuration. Don't worry, this
    file is in the `.gitignore` so it won't get pushed to github.

    Take care not to include extra spaces or quotes. These values are taken verbatum.

    ```javascript
    NODE_ENV=development
    PORT=3001
    WWW=./
    ```

## Running the app locally

1.  Build the Angular app and launch the node server

    ```bash
    ng build
    npm dev-proxy
    ```

1.  Open the browser to <http://localhost:3001>

## Docker

* Install and run [Docker](https://www.docker.com/community-edition)

### Docker Compose

Create the Docker image that you can `docker push` to a registry. This command uses `docker-compose` to build the image and run the container.

> This image expects environment variables to be set in whichever cloud provider you push to.

1.  CMD+SHIFT+P `docker: compose up`
1.  Select `docker-compose.debug.yml`
1.  Browse to <http://localhost:3001>

> Do you prefer terminal commands? You can run the docker commands from the terminal
>
> ```bash
> npm run docker-up
> open http://localhost:3001
> ```

### Docker Compose with Debugging

Create the Docker image and run it locally. This commands uses `docker-compose` to build the image and run the container.

This uses your `.env` settings and opens port `9229` for debugging.

1.  CMD+SHIFT+P `docker: compose up`
1.  Select `docker-compose.debug.yml`
1.  Browse to <http://localhost:3001>

Open VS Code, launch the `Docker: Attach to Node` debugging profile

> Do you prefer terminal commands? You can run the docker commands from the terminal
>
> ```bash
> npm run docker-debug
> open http://localhost:3001
> ```

## Deploy to Azure

### Deploy to Azure Requirements

1.  Azure account

    Free Azure Trial - <https://aka.ms/jp-free>

1.  Install the Azure CLI

    link

1.  Azure/Node/Docker extensions for VS Code

    Extensions: <https://aka.ms/vsc-node>

### Deploy Docker Image to Azure

1.  CMD+SHIFT+P `docker: compose up`
1.  Select `docker-compose.yml`
1.  Go to the Docker extension in the sidebar and expand `Images`
1.  Right click the image and select `tag`
1.  Prefix the tag with your container registry name
    e.g Azure container registry `papacr.azurecr.io/vikings:latest`
1.  Right click the image and select `push`
1.  Expand `Registries / Azure` in the Docker extension in the sidebar
1.  Right click the image you pushed and select `deploy to azure app service`
1.  Follow the instructions when prompted to choose your server

### Notes

1.  Azure Container Registry Login command may be needed

    ```bash
    az acr login --name your-azure-container-registry-name
    ```

> If you get errors with `az acr login` try running `az account clear`. Then run `az login` again and follow the prompts. Then try again with `az acr login`

## Cosmos DB (Optional)

This Vikings demo uses an in memory data store by default. If you would like to use Azure's Cosmos DB, a mongo DB API, follow these steps:

1.  Create a [CosmosDB instance](https://aka.ms/jp-cosmos-node)

1.  Configure Cosmos DB server settings

    In the `.env` and append the `COSMOSDB` specific setting shown below, but for your specific configuration.

    ```javascript
    USE_COSMOSDB = yes;
    COSMOSDB_ACCOUNT = your_cosmos_account;
    COSMOSDB_DB = your_cosmos_db;
    COSMOSDB_KEY = your_cosmos_key;
    COSMOSDB_PORT = 10255;
    ```

## Problems or Suggestions

[Open an issue here](https://github.com/johnpapa/vikings/issues)
