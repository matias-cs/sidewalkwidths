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
    "rating": "very bad",
    "color": "#FF0049"
  },
  {
    "value": 42.3,
    "rating": "bad",
    "color": "#FF461E"
  },
  {
    "value": 47,
    "rating": "average",
    "color": "#FF9300"
  },
  {
    "value": 51.6,
    "rating": "good",
    "color": "#e4da27"
  },
  {
    "value": 56.9,
    "rating": "good",
    "color": "#1ce262"
  },
  {
    "value": 63.9,
    "rating": "very good",
    "color": "#00FFC4"
  },
  {
    "value": 87.1,
    "rating": "excellent",
    "color": "#00D2FF"
  },
]
