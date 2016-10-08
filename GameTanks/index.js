/**
 * Created by hungm on 9/13/2016.
 */
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var allTanks ={};

io.on('connection', function (socket) {
    console.log('user connected');

// nhan vi tri tank tu client
   socket.on('tankPos',function (msg) {
       msg.id = socket.id;
       socket.emit('lstOtherTanks',allTanks);
       allTanks[socket.id]= msg;
       socket.broadcast.emit('newPlayerJoined',msg);

   });

socket.on('tankMoved',function (msg) {

    if(allTanks[socket.id]){

        msg.id = socket.id;
        allTanks[socket.id].x = msg.position.x;
        allTanks[socket.id].y = msg.position.y;
        socket.broadcast.emit('playerTankMoved',msg);
    }

});

    socket.on('tankFire',function (msg) {

        if(allTanks[socket.id]){

            msg.id = socket.id;
            allTanks[socket.id].x = msg.position.x;
            allTanks[socket.id].y = msg.position.y;
            socket.broadcast.emit('playerTankFired',msg);
        }

    });
//
    socket.on('disconnect', function() {
        console.log('user disconnected: ' + socket.id);

        delete allTanks[socket.id];
        socket.broadcast.emit('playerDis',socket.id);
    });
});


http.listen(6969, function () {
    console.log('Server stated. Listen on 6969');
});

