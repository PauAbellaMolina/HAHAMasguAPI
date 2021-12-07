const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
//DOES KEEP DB DATA
db.sequelize.sync();

//DROP AND CREATE DB EVERY TIME SERVER RESTARTS
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to hahamasgu api." });
});

//Custom models routes
require("./app/routes/user.routes")(app);
require("./app/routes/game.routes")(app);
require("./app/routes/guess.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});