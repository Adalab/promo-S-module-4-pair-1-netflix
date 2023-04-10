const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
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

let connection;

mysql
  .createConnection({
    host: "localhost",
    database: "Netflix",
    user: "root",
    password: "Lucas020813.",
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
      .catch((err) => {
        console.error("Error de conexion: " + err.stack);
      });
  })
  .catch((err) => {
    console.error("Error de configuración: " + err.stack);
  });

// routas de express
server.get("/movies", (req, res) => {
  console.log("muestranos las peliculas");
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

      res.json({
        success: true,
        movies: results,
      });
    })
    .catch((err) => {
      throw err;
    });
});
