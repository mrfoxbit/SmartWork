// express
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.listen(9000, () => console.log("Server started."));

// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


// Define routes

app.get("/", function(req, res){

    res.render("index");

});

app.get("/login", function(req, res){

    res.render("login");

});

app.get("/logout", function(req, res){

    res.redirect("login");

});

app.get("/inbox", function(req, res){

    res.render("inbox");

});

app.get("/administration", function(req, res){

    res.render("index");

});
