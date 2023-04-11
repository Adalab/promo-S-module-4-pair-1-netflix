const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// conectamos con MongoDB
const dbConnect = require("../config/connection");
dbConnect();

// create and config server
const server = express();
//configuramos el servidor  
server.use(cors());
server.use(express.json());

// init express aplication// arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


server.get("/"),
  function (req, res) {
    res.send({
      success: true,
      movies: mysql,
    });
  };
//variable para conectar a la base de datos
let connection;
//creamos la conexión (mysql+express)
mysql
  .createConnection({
    host: "localhost",
    database: "Netflix",
    user: "root",
    password: "",
  })
  .then((conn) => {
    connection = conn;
    connection
      .connect()
      .then(() => {
        console.log(
          `Conexión establecida con la base de datos (identificador=${connection.threadId})`
        );
      })
      .catch((err) => {  //si hay error
        console.error("Error de conexion: " + err.stack);
      });
  })
  .catch((err) => {
    console.error("Error de configuración: " + err.stack);
  });

// routas de express
//buscamos por géenero con if y else
server.get("/movies", (req, res) => { //creamos endpoints
  console.log("muestranos las peliculas");
  //guardamos el valor del query param de género
  const genreFilterParam = req.query.genre;
  let sql = "SELECT * FROM movies";

  if (genreFilterParam === "") {
    sql = "SELECT * FROM movies";
  } else {
    sql = `SELECT * FROM movies WHERE genre=${genreFilterParam}`;
  }

  connection
    .query(sql)
    .then(([results, fields]) => {
      console.log("Información recuperada:");
      results.forEach((result) => {
        console.log(result);
      });

      res.json({//respuesta que envia el endpoint
        success: true,
        movies: results,
      });
    })
    .catch((err) => { //si hay error al hacer la peticion
      throw err;
    });
});
//endpoint del Login

const staticServerPathWeb = './src/public-react'; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));