/*
const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
*/

const data = require('./foodinfodata.json')
const Food = require('../models/foodinfo')

const foodInfoData = data.map(data => {
    const meal = {}
    meal.name = data.meals.strMeal
    // meal._id = data.meals.idMeal
    meal.image = data.meals.strMealThumb
    meal.description = data.meals.strCategory
    meal.instructions = data.meals.strInstructions
    meal.area = data.meals.strArea
    meal.video = data.meals.strYoutube
    return meal
})


Food.deleteMany({}).then(() => {
    Food.create(foodInfoData)
        .then(foodInfoData => {
            console.log(foodInfoData)
            process.exit()
        })
})