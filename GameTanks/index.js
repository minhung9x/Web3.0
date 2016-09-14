/**
 * Created by hungm on 9/13/2016.
 */
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(_dirname));

app.get('/',function(req,res){
    res.sendFile(_dirname + '+/index.html');
});

io.on('connection',function (socket) {
    console.log('user connected');
    socket.on('disconnect',function () {
        console.log('user disconnected: ' + socket.id);
    });
});


http.listen(6969,function () {
    console.log('Server stated. Listen on 6969');
});

