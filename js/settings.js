var MAPBOX_TOKEN = 'pk.eyJ1IjoibWF0aWFzY2FyZG9zbyIsImEiOiJjbGE1dGN1d3AweGpzM3ZvNzA2a3Z0ODMxIn0.9tjff8LSWQZoQ3O5CbSiOQ'
var MAPBOX_STYLE = 'mapbox://styles/matiascardoso/clkoc58ab005s01o8ezb3d30t'
var SIDEWALKS_TILESET = 'mapbox://matiascardoso.94x90g7n'
var SIDEWALKS_LAYER = 'Walkability2-9v7uqc'
var DISTRICTS_TILESET = 'mapbox://dcharvey.7dbzv200'
var DISTRICTS_LAYER = 'districts_nyc-1eoi4m'
var UNITS = 'points' // change to 'm' for meters
var PRECISION = 0.1 // the number of decimal places
var GROUPS = [
  {
    "value": 37,
    "rating": "very low",
    "color": "#FF0049"
  },
  {
    "value": 42.3,
    "rating": "low",
    "color": "#FF461E"
  },
  {
    "value": 47,
    "rating": "somewhat low",
    "color": "#FF9300"
  },
  {
    "value": 51.6,
    "rating": "average",
    "color": "#e4da27"
  },
  {
    "value": 56.9,
    "rating": "somewhat high",
    "color": "#1ce262"
  },
  {
    "value": 63.9,
    "rating": "high",
    "color": "#00FFC4"
  },
  {
    "value": 80.1,
    "rating": "very high",
    "color": "#00D2FF"
  },
]
