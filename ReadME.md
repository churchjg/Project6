#Recipe API

This is a RESTful API that contains data of all the meals in the MealDB database.
It was created as a full API from scratch. Frameworks were utilized from Mongoose, Axios, Express, and MongoDB to import data; Heroku was used for deployment. It contains 1000 recipes that users can search through.

#Deployed URL
https://getcookingwithjon.herokuapp.com/

#Models

const foodInfoSchema = new Schema({
    name: String,
    image: String,
    category: String,
    tags: String,
    instructions: String,
    area: String,
    video: String,
})

#Strategy
I chose to grab data from an API I am familiar with (MealDB). I was originally delayed on this project due to the 2020 election and lost time due to switching APIs. The largest challenge I encountered was setting up my routes correctly and changing my getinfo.js file to correctly loop through the data.

#Routes - The following is a list of routes for this API

*HOMEPAGE - 

app.get("/", (req, res) => {
    meal.find({}).then(foodInfo => {
        res.json(foodInfo);
    });
})

*SEARCH BY NAME -

app.get("/name/:id", (req, res) => {
    meal.find({name: req.params.id}).then(foodInfo => {
        res.json(foodInfo);
    });
})

*SEARCH BY CATEGORY -

app.get("/category/:id", (req, res) => {
    meal.find({category: req.params.id}).then(foodInfo => {
        res.json(foodInfo);
    });
})

*SEARCH BY AREA (Country of Origin) -


app.get("/area/:id", (req, res) => {
    meal.find({area: req.params.id}).then(foodInfo => {
        res.json(foodInfo);
    });
})

*SEARCH BY TAGES (starter, dessert, sides) -

app.get("/tags/:id", (req, res) => {
    meal.find({tags: req.params.id}).then(foodInfo => {
        res.json(foodInfo);
    });
})

*FIND A RECIPE BY NAME AND UPDATE -

app.put("/foodInfo/:name",  (req, res) => {
    meal.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    ).then(foodInfo => {
        res.json(foodInfo)
    })
})

*FIND A RECIPE BY NAME AND DELETE -
app.delete("/foodInfo/:name", (req, res) => {
    meal.findOneAndRemove({ name: req.params.name })
        .then(foodInfo => {
            res.json(foodInfo)
        })
})


#Installations
*Express
*Mongoose
*Body-parser
*Axios
*Node