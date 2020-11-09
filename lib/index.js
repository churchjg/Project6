const express = require("express");
const app = express();
const parser = require("body-parser");
const meal = require('../models/foodinfo');
const cors = require("cors");

// const foodInfo = require('../models/foodinfo');
app.use(cors());
app.use(parser.json());

app.get('/', (req, res)=>{
    res.redirect("/name")
})

app.get("/name", (req, res) => {
    meal.find({}).then(foodInfo => {
        res.json(foodInfo);
    });
})

app.get("/name/random", (req, res) => {
    meal.find({}).then(foodInfo => {
        res.json(foodInfo);
    })
})

//search by name
app.get("/name/:id", (req, res) => {
    meal.find({name: req.params.id}).then(foodInfo => {
        res.json(foodInfo);
    });
})

//search by category
app.get("/category/:id", (req, res) => {
    meal.find({category: req.params.id}).then(foodInfo => {
        res.json(foodInfo);
    });
})

//search by area (country of origin)
app.get("/area/:id", (req, res) => {
    meal.find({area: req.params.id}).then(foodInfo => {
        res.json(foodInfo);
    });
})

//search by tags (starter, dessert, sides)
app.get("/tags/:id", (req, res) => {
    meal.find({tags: req.params.id}).then(foodInfo => {
        res.json(foodInfo);
    });
})

app.get("/video/:id", (req, res) => {
    meal.find({video: req.params.id}).then(foodInfo => {
        res.json(foodInfo);
    });
})
/*
//search by ingredient
app.get("/:ingredient", (req, res) => {
    meal.find({ingredient: req.params.ingredient}).then(foodInfo => {
        res.json(foodInfo);
    });
})
*/


//create a recipe
/*
app.post("/foodInfo", (req, res) => {
    meal.create(req.body).then(foodInfo => {
        res.json(foodInfo);
    });
});
*/

//update a recipe
app.put("/foodInfo/:name",  (req, res) => {
    meal.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    ).then(foodInfo => {
        res.json(foodInfo)
    })
})
//delete a recipe
app.delete("/foodInfo/:name", (req, res) => {
    meal.findOneAndRemove({ name: req.params.name })
        .then(foodInfo => {
            res.json(foodInfo)
        })
})

app.set("port", process.env.PORT || 8080);


app.listen(app.get("port"), () => {
    console.log(`Check Port: ${app.get('port')}`)
})