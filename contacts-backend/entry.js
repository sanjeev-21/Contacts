var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var app = express()
var cors = require('cors')
const route_contact = require('./route/contact')
mongoose.connect('mongodb://localhost/contacts_db')

mongoose.connection.on("connected", () => {
    console.log("Mongoose connected at port 27017");
});
mongoose.connection.on("error", (err) => {
    console.log(err);
});
app.use(cors())
app.use(bodyparser.json()); //helps to parse json data in the request body
app.use("/contact", route_contact)

app.listen(8081, () => {
    console.log("Server has been started from the port - " + 8081)
});