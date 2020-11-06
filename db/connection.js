const mongoose = require("mongoose");

let mongoURI = "";
if(process.env.NODE_ENV === "production"){
    mongoURI = process.env.DB_URL;
}else{
    mongoURI = "mongodb://localhost/foodinfo"
}

mongoose.connect(mongoURI, { useNewUrlParser: true },{ useUnifiedTopology: true } );

/*
module.exports = mongoose;
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