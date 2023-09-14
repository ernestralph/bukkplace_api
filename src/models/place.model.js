const Place = require('./schema/place.mongo');

async function savePlace(place){
 try {
  const exisitedPlace = await Place.findOne({title : place.title});
  if(exisitedPlace) return {status: 403, data:[], message:"Place already exist!"};
  const newPlace = new Place(place);
  const placeData = await newPlace.save()
  if(newPlace){
   return{
    status: 200,
    data:[newPlace],
    message:'New place created successfully!'
   }
  }
 } catch (error) {
  return{
    status: 500,
    data:[],
    message:'Internal server error!'
   }
  }
 }


async function getPlaces(){
 try {
  const places = await Place.find();
  if(!places || !Array.isArray(places)){
    return{
    status: 404,
    data:[],
    message:'No Records found!'
   }};

  return{
    status: 200,
    data: places,
    message:'Records fetched successfully!'
   }
 } catch (error) {
  return{
    status: 500,
    data:[],
    message:'Internal server error!'
   }
 }
}

async function getPlace(id){
 try {
  const place = await Place.findById(id);
  console.log(id);
  if(!place){
    return {
        status: 404,
        data:[],
        message:'Record not found!'
   }
  }
  return{
    status: 200,
    data:[place],
    message:'Record fetched successfully!'
  }
 } catch (error) {
  return{
    status: 500,
    data:[],
    message:'Internal server error!'
   }
 }
}

async function updatePlace(id, placeObject){
 try {
  const place = await Place.findById(id);
  if (!place ){
   return {
    status: 404,
    data:[],
    message:'Record not found!'
   }
  }
  
  const updatedPlace = await Place.findByIdAndUpdate(id, placeObject, {returnDocument:'after'});
   return{
    status: 200,
    data:[updatedPlace],
    message:'Record updated successfully!'
  }
 } catch (error) {
  console.log(error);
  return {
     status: 500,
     data:[],
     message:'Internal server error!'
    }
 }
}

async function deletePlace(id){
 try {
  const place = await Place.findById(id);
  if (!place ){
   return {
     status: 404,
     data:[],
     message:'Record not found!'
    }
   }

   await Place.findByIdAndDelete(id);
   return{
    status: 201,
    data:[],
    message:'Record deleted successfully!'
  }
 } catch (error) {
  return {
     status: 500,
     data:[],
     message:'Internal server error!'
    }
 }
}
module.exports= ({
 savePlace,
 getPlaces,
 getPlace,
 updatePlace,
 deletePlace,
});