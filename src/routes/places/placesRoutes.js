const express = require('express');
const {
  getPlace,
  getPlaces,
  addPlace,
  updatePlace,
  deletePlace
} = require('./placesController');

const placesRouter = express.Router();


placesRouter.get('/', getPlaces);
placesRouter.post('/', addPlace);
placesRouter.get('/:id', getPlace);
placesRouter.put('/:id', updatePlace);
placesRouter.delete('/:id', deletePlace);

module.exports = placesRouter;