var MAPBOX_TOKEN = 'pk.eyJ1IjoibWF0aWFzY2FyZG9zbyIsImEiOiJjbGE1dGN1d3AweGpzM3ZvNzA2a3Z0ODMxIn0.9tjff8LSWQZoQ3O5CbSiOQ'
var MAPBOX_STYLE = 'mapbox://styles/matiascardoso/clkoc58ab005s01o8ezb3d30t'
var SIDEWALKS_TILESET = 'mapbox://matiascardoso.9gzno2y4'
var SIDEWALKS_LAYER = 'sidewalkwidths_nyc-87ugfr'
var DISTRICTS_TILESET = 'mapbox://dcharvey.7dbzv200'
var DISTRICTS_LAYER = 'districts_nyc-1eoi4m'
var UNITS = 'm' // change to 'm' for meters
var PRECISION = 0.1 // the number of decimal places
var GROUPS = [
  {
    "value": 0.0,
    "rating": "impossible",
    "color": "#FF0049"
  },
  {
    "value": 6.0,
    "rating": "very difficult",
    "color": "#FF461E"
  },
  {
    "value": 9.0,
    "rating": "difficult",
    "color": "#FF9300"
  },
  {
    "value": 12.0,
    "rating": "somewhat difficult",
    "color": "#e4da27"
  },
  {
    "value": 15.0,
    "rating": "somewhat easy",
    "color": "#1ce262"
  },
  {
    "value": 18.0,
    "rating": "easy",
    "color": "#00FFC4"
  },
  {
    "value": 21.0,
    "rating": "very easy",
    "color": "#00D2FF"
  },
]
