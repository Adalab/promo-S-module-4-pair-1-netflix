const mongoose = require("mongoose");

const dbConnect = () => {
  const user = "virlucero";
  const pass = "gyuagbmVFsDAXcuL";
  const dbName = "Netflix";

  const uri = `mongodb+srv://${user}:${pass}@cluster0.jnfdxxm.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("conectado a mongodb"))
    .catch((e) => console.log("error de conexión", e));
};
module.exports = dbConnect;
