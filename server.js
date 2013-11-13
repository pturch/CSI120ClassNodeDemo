var express = require('express');
var app = express();
var whatislife = {
"name" : "Paul Turchinetz",
"vacation" : {
        "places": ["59.93, 30.36","19.38, 11.38","38.94, -111.45"]
        }
};

app.get('/', function(req, res){
  res.json(whatislife);
});

var port = process.env.PORT || 5000;
app.listen(port);