const express = require('express');
const {
  httpGetPlace,
  httpGetPlaces,
  httpSavePlace,
  httpUpdatePlace,
  httpDeletePlace,
} = require('./placesController');

const placesRouter = express.Router();


placesRouter.get('/', httpGetPlaces);
placesRouter.post('/', httpSavePlace);
placesRouter.get('/:id', httpGetPlace);
placesRouter.put('/:id', httpUpdatePlace);
placesRouter.delete('/:id', httpDeletePlace);

module.exports = placesRouter;