// Dependencies
var express = require("express");
// var mysql = require("mysql");

// Initialization
var app = express();

// View Engine
app.set("view engine", "ejs");

// MIDDLEWARE -------------------
app.use(express.static("public")); // adding static assets (css, img, js files)
app.use(express.urlencoded({ extended: false })); // reads the data
app.use(express.json()); // format the data coming in as an object under a property call body

//PORT
var PORT = process.env.PORT || 3000;

//DataBase Stuff
// var db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "todolist",
//   });

// db.connect(function (error) {
//     if (error) throw error;

//     console.log("MYSQL is connected");
//   });

// *********** ROUTES ***********

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

app.get("/message", function (req, res) {
  res.render("messages.ejs");
});

//GET MAIN SWIPE PAGE
app.get("/mainswipe", function (req, res) {
  res.render("mainswipe.ejs");
});
//GET SHELTER  PAGE
app.get("/shelterpage", function (req, res) {
  res.render("shelterpage.ejs");
});
//GET MESSAGES  PAGE
app.get("/messages", function (req, res) {
  res.render("messages.ejs");
});
//GET MESSAGES  PAGE
app.get("/messages", function (req, res) {
  res.render("messages.ejs");
});
// APP listen code
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
