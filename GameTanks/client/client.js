/**
 * Created by hungm on 9/13/2016.
 */
class Client{
    constructor(tankPos){
        this.socket=io();

//


        //
        this.socket.emit('tankPos',tankPos);

        this.socket.on('newPlayerJoined',function (msg) {
            // nhan du lieu server gui ve, roi thuc hien ham onNewPlayerJoined
           TankOnline.onNewPlayerJoined(msg);
        });

        this.socket.on('lstOtherTanks',function (msg) {
         TankOnline.onReceivedTanksInfo(msg);
        });

        this.socket.on('playerTankMoved',function (msg) {
            TankOnline.onPlayerTankMoved(msg);
        });
        this.socket.on('playerTankFired',function (msg) {
            TankOnline.onPlayerTankFired(msg);
        });

        this.socket.on('playerDis',function(msg) {
            TankOnline.onPlayerDis(msg);
        });

    }
    move(msg){
        this.socket.emit('tankMoved',msg);
    }
    fire(msg){
        this.socket.emit('tankFire',msg);
    }
 die(msg){


}
}