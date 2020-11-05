const express = require("express");
const app = express();
const parser = require("body-parser");
const meal = require('../models/foodinfo');
const foodInfo = require('../models/foodinfo');

app.use(parser.json());


app.get("/", (req, res) => {
    meal.find({}).then(foodInfo => {
        res.json(foodInfo);
    });
})
/*
app.post("/foodInfo", (req, res) => {
    meal.create(req.body).then(foodInfo => {
        res.json(foodInfo);
    });
});

app.put("/foodInfo/:id",  (req, res) => {
    meal.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    ).then(foodInfo => {
        res.json(foodInfo)
    })
})

app.delete("/foodInfo/:id", (req, res) => {
    meal.findOneAndRemove({ _id: req.params.id })
        .then(foodInfo => {
            res.json(foodInfo)
        })
})
*/
app.listen(4000, () =>
    console.log("Lets get cooking!")
);