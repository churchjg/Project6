//https://www.themealdb.com/api.php

////probably going to use mealdb again to get my recipes. Having a hard time finding the 'perfect' API.


const fetch = require('node-fetch');
// const fs = require('fs');
const Food = require('./foodinfo')

// const urlId = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772' //Lookup full meal details by id
const urlRandom = 'https://www.themealdb.com/api/json/v1/1/random.php' //Lookup a single random meal
// const urlByName = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' //search by name
//const urlCat = 'https://www.themealdb.com/api/json/v1/1/categories.php' //List all meal categories
// const urlCatFilt = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood' //Filter by Category
// const urlAreaFilt = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian' //Filter by Area


for (let i = 0; i < 1500 ; i++) {
    fetch(urlRandom)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            console.log(data.meals.strMeal)
            let meal = new Food({
                name: data.meals[0].strMeal
                , image: data.meals[0].strMealThumb
                , category: data.meals[0].strCategory
                , tags: data.meals[0].strTags
                , instructions: data.meals[0].strInstructions
                , area: data.meals[0].strArea
                , video: data.meals[0].strYoutube
            })
            console.log("Meals: " + meal);
            meal.save();
        }
        )
}


