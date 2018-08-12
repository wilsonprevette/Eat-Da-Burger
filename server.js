//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require('express-handlebars');
const app = express();
const routes = require("./controllers/burgers_controller.js");
const port = 8080;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("listening")
};
