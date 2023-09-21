const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://prakash:prem@cluster0.ihf7myh.mongodb.net/?retryWrites=true&w=majority"
  ).then((res)=>console.log(res)).catch((err)=>console.log(err));
};

