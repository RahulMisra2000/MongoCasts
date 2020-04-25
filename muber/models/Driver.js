const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PointSchema = new Schema({
  coordinates: { 
      type: [Number],                 // This is for lat and lng 
      index: '2dsphere'               // want mongo to use 2dsphere way instead of 2d because of .... earth distances
  },
  type: { 
      type: String, default: 'Point'  // GeoJson supports, Point, Line, Polygon, etc
                                      // we have chosen point because we are concerned with a driver's location
  }
});

const DriverSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  driving: {
    type: Boolean,
    default: false
  },
  geometry: PointSchema
});

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;
