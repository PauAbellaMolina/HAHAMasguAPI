const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const http = require('http').Server(app);
const io = require('socket.io')(http, { 
  cors: {
    origin: "https://hahamasgu.pauabella.dev",
    methods: ["GET", "POST"]  
  }
});
const portIO = 3000;

var corsOptions = {
  origin: "https://romantic-ritchie-5cbef4.netlify.app"
};
app.use(cors());
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

  let room;

  //Listen to room joinings from clients
  socket.on('room', (roomCode) => {
    console.log("-----> JOINED ROOM WITH ID " + roomCode)
    //Join connection to room
    socket.join(roomCode);
    room = roomCode;
    //Emit back to connected client that the room has been joined correctly
    io.to(socket.id).emit("roomJoined");
  });

  //When receiving newGuessingSubmitted from client
  socket.on('newGuessingSubmitted', () => {
    io.in(room).emit("newGuess"); //Emit new guess "available" to clients so they can refetch guesses
  });

  //When receiving winnerPicked from client
  socket.on('winnerPicked', () => {
    io.in(room).emit("winnerPicked"); //Emit that winner has been picked to clients so their router can push to the winner view
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

/////////SOCKET IO//////////

