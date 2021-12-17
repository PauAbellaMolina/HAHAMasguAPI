const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const http = require('http').Server(app);
const io = require('socket.io')(http);
const portIO = 3000;

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json({limit: '200mb'}));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

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
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

http.listen(portIO, () => {
  console.log(`Socket.IO server running at http://localhost:${portIO}/`);
});


/////////SOCKET IO//////////

io.on('connection', (socket) => {
  console.log('-----> A USER CONNECTED');

  //Emitting from socket to clients
  io.emit("customEmit");

  //When receiving test from client
  socket.on('test', () => {
    io.emit("test"); //Emit test from socker
  });

  //Listen to room joinings from clients
  socket.on('room', (room) => {
    console.log("-----> JOINED ROOM WITH ID " + room)
    //Join connection to room
    socket.join(room);
    //Emit back to connected client that the room has been joined correctly
    io.to(socket.id).emit("roomJoined");
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

/////////SOCKET IO//////////

