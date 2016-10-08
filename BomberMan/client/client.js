/**
 * Created by hungm on 9/13/2016.
 */
class Client{
    constructor(manPos){
        this.socket=io();

//


        //
        this.socket.emit('manPos',manPos);

        this.socket.on('newPlayerJoined',function (msg) {
            // nhan du lieu server gui ve, roi thuc hien ham onNewPlayerJoined
           BO.onNewPlayerJoined(msg);
        });

        this.socket.on('lstMenOther',function (msg) {
         BO.onReceivedMenInfo(msg);
        });
        this.socket.on('playerManMoved',function (msg) {
           BO.onPlayerManMoved(msg);
        });
        this.socket.on('playerBomNoed',function (msg) {
            BO.onPlayerBomNoed(msg);
        });
        // this.socket.on('PlayerManDied',function (msg) {
        //     BO.onPlayerManDied(msg);
        // })

        this.socket.on('playerDis',function(msg) {
            BO.onPlayerDis(msg);
        });

    }
    move(msg){
        this.socket.emit('manMoved',msg);
    }
    bomNo(msg){
        this.socket.emit('bomNoed',msg);

    }
    manDie(msg){
        this.socket.emit('manDie',msg);
    }

}