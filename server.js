var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = process.env.PORT || 8080;


app.use(express.static(process.cwd() + "/public"));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.post('/:id', function(req, res ) {
	console.log(req.param)
	console.log(req.params.id)
})

app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});