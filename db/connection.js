const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/foodinfo", { useNewUrlParser: true });

module.exports = mongoose