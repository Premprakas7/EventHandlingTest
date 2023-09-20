const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://JWT:JWT@kartik.exjuu.mongodb.net/?retryWrites=true&w=majority"
  );
};

