const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const actorsSchema = new Schema(
  {
    name: String,
    lastName: String,
    country: String,
    birthday: String,
  },
  { collection: "actors" }
);
const actors = mongoose.model("actors", actorsSchema);
module.exports = actors;
