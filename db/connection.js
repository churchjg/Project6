const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/foodinfo", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  /*.then(instance =>
    console.log(`Connected to db`)
  )
  .catch(err => console.log("Connection Failed.", err));
*/
// mongoose.connect("mongodb://localhost/foodinfo", { useNewUrlParser: true });

module.exports = mongoose