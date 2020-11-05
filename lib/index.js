const express = require("express");
const app = express();
const parser = require("body-parser");
const List = require('../models/foodinfo');
const foodInfo = require('../models/foodinfo');

app.use(parser.json());


app.get("/", function (req, res) {
    List.find({}).then(foodInfo => {
        res.json(foodInfo);
    });
});

app.post("/foodInfo", function (req, res) {
    List.create(req.body).then(foodInfo => {
        res.json(foodInfo);
    });
});

app.put("/foodInfo/:id", function (req, res) {
    List.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    ).then(foodInfo => {
        res.json(foodInfo)
    })
})

app.delete("/foodInfo/:id", function (req, res) {
    List.findOneAndRemove({ _id: req.params.id })
        .then(foodInfo => {
            res.json(foodInfo)
        })
})

app.listen(4000, () =>
    console.log("Lets get cooking!")
);