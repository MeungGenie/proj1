const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    console.log(process.env.DB_CONNECT)
    const connect = await mongoose.connect(process.env.DB_CONNECT);
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
