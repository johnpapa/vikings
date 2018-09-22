// @ts-check
const { ReadPreference } = require('mongodb');
const Villain = require('./villain.model');

const captains = console;

function getVillains(req, res) {
  const docquery = Villain.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(villains => res.status(200).json(villains))
    .catch(error => res.status(500).send(error));
}

function postVillain(req, res) {
  const originalVillain = {
    name: req.body.name,
    description: req.body.description,
  };
  originalVillain.id = `Villain${originalVillain.name}`;
  const villain = new Villain(originalVillain);
  villain.save((error) => {
    if (checkServerError(res, error)) return;
    res.status(201).json(villain);
    captains.log('Villain created successfully!');
  });
}

function putVillain(req, res) {
  const updatedVillain = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
  };

  Villain.findOneAndUpdate(
    { id: updatedVillain.id },
    { $set: updatedVillain },
    { upsert: true, new: true },
    (error, doc) => {
      if (checkServerError(res, error)) return;
      res.status(200).json(doc);
      captains.log('Villain updated successfully!');
    },
  );
}

function deleteVillain(req, res) {
  const { id } = req.params;
  Villain.findOneAndRemove({ id })
    .then((villain) => {
      if (!checkFound(res, villain)) return;
      res.status(200).json(villain);
      captains.log('Villain deleted successfully!');
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

function checkFound(res, villain) {
  if (!villain) {
    res.status(404).send('Villain not found.');
    return false;
  }
  return villain;
}


module.exports = {
  getVillains,
  postVillain,
  putVillain,
  deleteVillain,
};
