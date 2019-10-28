//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Main Page Path
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// login Path
app.get("/login", function(req, res) {
  res.sendFile(__dirname + "/login.html");
});

// register Path
app.get("/register", function(req, res) {
  res.sendFile(__dirname + "/register.html");
});
app.post("/register.html", (req, res) => {
  console.log("hello");
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    const createdUser = {
      Name: name,
      email: email,
      password: password
    };
    console.log(createdUser);
    res.sendFile(__dirname + "/login.html");
  } catch (err) {
    console.log(err);
    return res.status(400).send({
      Status: "Error Caught!!",
      message: "The error is: ",
      Error: err
    });
  }
});
// Reset Path
app.get("/reset", function(req, res) {
  res.sendFile(__dirname + "/reset.html");
});

// Route to Checkout Page
app.get("/cheakout", function(req, res) {
  res.sendFile(__dirname + "/checkout.html");
});

// Forgot Path
app.get("/forgot", function(req, res) {
  res.sendFile(__dirname + "/forgot.html");
});

// Product Page Path
app.get("/productpage", function(req, res) {
  res.sendFile(__dirname + "/product-page.html");
});

// initializing Server
app.listen(3000, function() {
  console.log("Server is running on prot 3000");
});
