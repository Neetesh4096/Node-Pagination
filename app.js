const express = require("express");
const app = express();
const User = require("./models");

const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.render("page", { pageTitle: "Home", data: "Hello" });
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const phone = req.body.phone.toString();
  User.create({ name: name, address: address, phone: phone })
    .then((result) => {
      console.log(result.dataValues);
      res.render("page", { pageTitle: "Success", data: "User Created" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/getall", (req, res) => {
  User.findAll()
    .then((result) => {
      res.render("pagination", { result });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
