// Dependencies
var express = require("express");
var mysql = require("mysql");
// axios package
var axios = require("axios");

// Initialization
var app = express();

var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({
  apiKey: "eEvCyZFrnCTWBwVbHkPtOo6rAiQjkRGqTIL0aXfJBoFS8GrXUP",
  secret: "4n6W8PmLHOSCIln6GnPajNnAq2WkEAnXAIqixMPg",
});
// View Engine
app.set("view engine", "ejs");

// MIDDLEWARE -------------------
app.use(express.static("public")); // adding static assets (css, img, js files)
app.use(express.urlencoded({ extended: false })); // reads the data
app.use(express.json()); // format the data coming in as an object under a property call body

//PORT
var PORT = process.env.PORT || 3000;

// DataBase Stuff
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "PawFinder",
});

db.connect(function (error) {
  if (error) throw error;

  console.log("MYSQL is connected");
});

// *********** ROUTES ***********
let page = 1;

// GET LANDING PAGE
app.get("/", function (req, res) {
  res.render("index.ejs");
});
//BELOW IS DATATBASE CODING
//   var sql = "SELECT * FROM todos";
//   db.query(sql, function (err, results) {
//     if (err) throw err;
//     // console.log(results);
//     res.render("list-of-todos.ejs", { list: results });
//   });
// });
//GET LOGIN PAGE
app.get("/login", function (req, res) {
  res.render("login.ejs");
});

//GET TEST PAGE
app.get("/survey", function (req, res) {
  res.render("survey.ejs");
});

app.get("/signup", function (req, res) {
  res.render("signup.ejs");
});

app.get("/message", function (req, res) {
  res.render("messages.ejs");
});

app.get("/profilepage", function (req, res) {
  res.render("profilepage.ejs");
});

//GET MAIN SWIPE PAGE
app.get("/mainswipe", function (req, res) {
  // api call to get all pets from petfinder
  // calling our api
  client.animal
    .search({
      type: "Dog",
      page,
    })
    .then(function (response) {
      // Do something with `aPi as JSON`
      let pets = [];
      let data = response.data;
      var petData = JSON.stringify(data.animals);
      let petInfo = JSON.parse(petData);

      for (var i = 0; i < petInfo.length; i++) {
        let pet = petInfo[i];
        let petPics = pet.photos;

        if (petPics.length > 0) {
          // console.log("this pet has a picture")
          // console.log(pet.photos[0].medium)
          pets.push(pet);
        }
      }
      console.log("here", pets)
      res.render("mainswipe", { pets });
    })
    .catch(function (error) {
      // Handle the error
      console.log(error);
    });

});

//GET SHELTER  PAGE
app.get("/shelterpage", function (req, res) {
  res.render("shelterpage.ejs");
});
//GET MESSAGES  PAGE
app.get("/messages", function (req, res) {
  res.render("messages.ejs");
});

// APP listen code
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
