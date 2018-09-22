// @ts-check
const { ReadPreference } = require('mongodb');
const Hero = require('./hero.model');

const captains = console;

function getHeroes(req, res) {
  const docquery = Hero.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(heroes => res.status(200).json(heroes))
    .catch(error => res.status(500).send(error));
}

function postHero(req, res) {
  const originalHero = {
    name: req.body.name,
    description: req.body.description,
  };
  originalHero.id = `Hero${originalHero.name}`;
  const hero = new Hero(originalHero);
  hero.save((error) => {
    if (checkServerError(res, error)) return;
    res.status(201).json(hero);
    captains.log('Hero created successfully!');
  });
}

function putHero(req, res) {
  const updatedHero = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
  };

  Hero.findOneAndUpdate(
    { id: updatedHero.id },
    { $set: updatedHero },
    { upsert: true, new: true },
    (error, doc) => {
      if (checkServerError(res, error)) return;
      res.status(200).json(doc);
      captains.log('Hero updated successfully!');
    },
  );
}

function deleteHero(req, res) {
  const { id } = req.params;
  Hero.findOneAndRemove({ id })
    .then((hero) => {
      if (!checkFound(res, hero)) return;
      res.status(200).json(hero);
      captains.log('Hero deleted successfully!');
    })
    .catch(error => checkServerError(res, error));
}


function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
  return false;
}

function checkFound(res, hero) {
  if (!hero) {
    res.status(404).send('Hero not found.');
    return false;
  }
  return hero;
}


module.exports = {
  getHeroes,
  postHero,
  putHero,
  deleteHero,
};
