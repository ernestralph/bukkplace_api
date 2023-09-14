  const {
  savePlace,
  getPlaces,
  getPlace,
  updatePlace,
  deletePlace,
  } = require('../../models/place.model');
  

  async function httpSavePlace(req, res){
   const data = await savePlace(req.body);
   res.status(data.status).json({
      message: data.message,
      data: data.data
    });
  }

  async function httpGetPlace(req, res){
    const data = await getPlace(req.params.id);
    res.status(data.status).json({
      message: data.message,
      data: data.data
    });
  }

  async function httpGetPlaces(req, res){
    const data = await getPlaces();
    res.status(data.status).json({
      message: data.message,
      data: data.data
    });
  }

  async function httpUpdatePlace(req, res){
   const data = await updatePlace(req.params.id, req.body);
   res.status(data.status).json({
      message: data.message,
      data: data.data
    });
  }

  async function httpDeletePlace(req, res){
    const data = await deletePlace(req.params.id);
    res.status(data.status).json({
       message: data.message,
       data: data.data
     });
   
  }

  module.exports = ({
    httpGetPlace,
    httpGetPlaces,
    httpSavePlace,
    httpUpdatePlace,
    httpDeletePlace
  })