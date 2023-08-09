  function getPlace(req, res){
   console.log('this function should return a place by id')
  }
  function getPlaces(req, res){
   console.log('this function should return all places')
  }
  function addPlace(req, res){
   console.log('this function should create a place')
  }
  function updatePlace(req, res){
   console.log('this function should update a place')
  }
  function deletePlace(req, res){
   console.log('this function should delete a getPlace')
  }

  module.exports = ({
   getPlace,
   getPlaces,
   addPlace,
   updatePlace,
   deletePlace
  })