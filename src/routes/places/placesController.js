  const {
  savePlace,
  getPlaces,
  getPlace,
  updatePlace,
  deletePlace,
  } = require('../../models/place.model');
  
  
  async function httpGetPlace(req, res){
    try {
      const place = await getPlace(req.query.id);
      if(place){
        return res.status(200).json({
          "data": place
        });
      }else{
        return res.status(404).json({
          "error": "Place not found!",
        });
      }
    } catch (error) {
      return res.status(500).json({
        "error": "Error fetching place",
      });
    }
  }

  async function httpGetPlaces(req, res){
    try {
      const places = await getPlaces();
      if(places){
        return res.status(200).json({
          "data": places
        });
      }else{
        return res.status(404).json({
          "error": "No places found",
        });
      }
    } catch (error) {
      return res.status(500).json({
        "error": "Error fetching places",
      });
    }
  }

  async function httpSavePlace(req, res){
    try {
      await savePlace(req.body);
      return res.status(200).json({
      message: 'New Place created successfully',
      });
    } catch (error) {
      return res.status(500).json({
        "error": "Error creating place",
      });
    }
  }

  async function httpUpdatePlace(req, res){
    try {
      await updatePlace(req.query.id, req.body);
      return res.status(200).json({
      message: ' Place updated successfully',
      });
    } catch (error) {
      return res.status(500).json({
        "error": "Error updating place",
      });
    }
  }
  async function httpDeletePlace(req, res){
   try {
      await deletePlace(req.query.id);
      return res.status(200).json({
      message: 'Place deleted successfully',
      });
    } catch (error) {
      return res.status(500).json({
        "error": "Error deleting place",
      });
    }
  }

  module.exports = ({
    httpGetPlace,
    httpGetPlaces,
    httpSavePlace,
    httpUpdatePlace,
    httpDeletePlace
  })