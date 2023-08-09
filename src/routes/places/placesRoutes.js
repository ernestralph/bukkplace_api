const express = require('express');
const {
  getPlace,
  getPlaces,
  addPlace,
  updatePlace,
  deletePlace
} = require('./placesController');

const placesRouter = express.Router();


placesRouter.get('/places', getPlaces);
placesRouter.post('/places', addPlace);
placesRouter.get('/places/:id', getPlace);
placesRouter.put('/places/:id', updatePlace);
placesRouter.delete('/places/:id', deletePlace);

module.exports = placesRouter;