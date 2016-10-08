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

var allMen ={};

io.on('connection', function (socket) {
    console.log('user connected');

// nhan vi tri tank tu client
   socket.on('manPos',function (msg) {
       msg.id = socket.id;
       socket.emit('lstMenOther',allMen);
       allMen[socket.id]= msg;
       socket.broadcast.emit('newPlayerJoined',msg);

   });
    socket.on('manMoved', function(msg){
        if(allMen[socket.id]) {
            msg.id = socket.id;
            allMen[socket.id].x = msg.position.x;
            allMen[socket.id].y = msg.position.y;
            socket.broadcast.emit('playerManMoved', msg);
        }
    });
    socket.on('bomNoed', function(msg){
        if(allMen[socket.id]) {
            msg.id = socket.id;
            allMen[socket.id].x = msg.position.x;
            allMen[socket.id].y = msg.position.y;

            socket.broadcast.emit('playerBomNoed', msg);
        }
    });
    // socket.on('manDie',function (msg) {
    //    if(allMen[socket.id]){
    //        msg.id = socket.id;
    //        allMen[socket.id].x = msg.position.x;
    //        allMen[socket.id].y = msg.position.y;
    //
    //        socket.broadcast.emit('playerManDied',msg);
    //    }
    // });

    socket.on('disconnect', function() {
        console.log('user disconnected: ' + socket.id);

        delete allMen[socket.id];
        socket.broadcast.emit('playerDis',socket.id);
    });
});


http.listen(6969, function () {
    console.log('Server stated. Listen on 6969');
});

