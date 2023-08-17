const {placeSchema} = require('./schema/place.mongo');

async function savePlace(place){
 const placeData = await placeSchema.findOneAndUpdate(
  {title : place.title},
  place,
  {upsert: true, new: true}
 );
 return placeData;
}

async function getPlaces(){
 return await placeSchema.find();
}

async function getPlace(id){
 return await placeSchema.findOne({
  _id: id
 });
}

async function updatePlace(id, placeObject){
 return await placeSchema.findByIdAndUpdate(id, placeObject);
}

async function deletePlace(id){
 return await placeSchema.findByIdAndUpdate(id);
}
module.exports= ({
 savePlace,
 getPlaces,
 getPlace,
 updatePlace,
 deletePlace,
});