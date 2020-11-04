const express = require("express");
const app = express();
const parser = require("body-parser");
const List = require("./models/nutrition");

app.use(parser.json());


app.listen(3000, () =>
    console.log("Is your server running? Better go catch it!")
);