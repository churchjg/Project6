const data = require('./foodinfodata.json')
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const foodInfoSchema = new Schema({
    name: String,
    image: String,
    category: String,
    tags: String,
    instructions: String,
    area: String,
    video: String,
})

const meal = mongoose.model("meal", foodInfoSchema);
module.exports = meal; 
