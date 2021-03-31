const mongoose = require("mongoose");
const Drink = require("../models/drink");
const mongo_uri = process.env.MONGO_URI;

mongoose
  .connect(mongo_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongo connection error"));
db.on("connected", console.log.bind(console, "Connected to Mongo"));
