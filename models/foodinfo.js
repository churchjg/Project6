const data = require('./foodinfodata.json')
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

/*
const foodInfoSchema = new Schema({
    _id: String
    , name/ title: String
    , image: String ? (I will have to look into this)
    , description: String
    , cooking instructions: String
    , cooking time: Number
    , vegetarian: Boolean
    , vegan: Boolean
    , ethnic background: string
    })

const foodinfo = mongoose.model("foodinfo", foodInfoSchema);
module.exports = foodinfo; 
*/