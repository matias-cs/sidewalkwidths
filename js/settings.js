var MAPBOX_TOKEN = 'sk.eyJ1IjoibWF0aWFzY2FyZG9zbyIsImEiOiJjbGtyNDF0bjQxYm81M2RreTA2bHRicnBtIn0.9AgSlXQprM5Z-DxemMTEdQ'
var MAPBOX_STYLE = 'mapbox://styles/matiascardoso/clj1tc6m800dv01qq1i4ba1ki'
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
