// @ts-check
const client = require('./db');
const { databaseDefName, heroContainer } = require('./config');

const container = client.database(databaseDefName).container(heroContainer);
const captains = console;

async function getHeroes(req, res) {
  try {
    const { result: heroes } = await container.items.readAll().toArray();
    res.status(200).json(heroes);
  } catch (error) {
    res.status(500).send(error);
  }
}

// function getHeroesViaPromises(req, res) {
//   client
//     .database(databaseDefName)
//     .container(heroContainer)
//     .items.readAll()
//     .toArray()
//     .then(({ result: heroes }) => {
//       res.status(200).json(heroes);
//     })
//     .catch(error => res.status(500).send(error));
// }

async function postHero(req, res) {
  const hero = {
    name: req.body.name,
    description: req.body.description,
  };
  hero.id = `Hero ${hero.name}`;

  try {
    const { body } = await container.items.create(hero);
    res.status(201).json(body);
    captains.log('Hero created successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putHero(req, res) {
  const hero = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
  };

  try {
    const { body } = await container.items.upsert(hero);
    res.status(200).json(body);
    captains.log('Hero updated successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteHero(req, res) {
  const { id } = req.params;

  try {
    const { body } = await container.item(id).delete();
    res.status(200).json(body);
    captains.log('Hero deleted successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getHeroes,
  postHero,
  putHero,
  deleteHero,
};
