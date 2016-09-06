/**
 * Created by hungm on 8/30/2016.
 */
var TankOnline ={
    config:{
        TANK_SPEED:300
    }
};

window.onload= function(){
   TankOnline.game= new Phaser.Game(window.innerWidth,
   window.innerHeight,
   Phaser.AUTO,'',
       {preload: preload,
       create:create,
       update:update});
}
var preload = function(){
    TankOnline.game.load.image('tank_down','./images/tank_player1_down_c0_t1_s1.png');
    TankOnline.game.load.image('tank_up','./images/tank_player1_up_c0_t1_s1.png');
    TankOnline.game.load.image('tank_left','./images/tank_player1_left_c0_t1_s1.png');
    TankOnline.game.load.image('tank_right','./images/tank_player1_right_c0_t1_s1.png');

};
var create = function(){
 TankOnline.player=TankOnline.game.add.sprite(200,200,'tank');
    TankOnline.game.physics.startSystem(Phaser.Physics.ARCADE);
    TankOnline.keyboard = TankOnline.game.input.keyboard;
TankOnline.game.physics.arcade.enable(TankOnline.player)
    TankOnline.player.loadTexture('tank_down');

};
var update = function(){
    if(TankOnline.keyboard.isDown(Phaser.KeyCode.DOWN)){
        TankOnline.player.loadTexture('tank_down');
        TankOnline.player.body.velocity.y =TankOnline.config.TANK_SPEED;

    }else if(TankOnline.keyboard.isDown(Phaser.KeyCode.UP)){
        TankOnline.player.loadTexture('tank_up');
        TankOnline.player.body.velocity.y =-TankOnline.config.TANK_SPEED;
    }else if(TankOnline.keyboard.isDown(Phaser.KeyCode.RIGHT)){
        TankOnline.player.loadTexture('tank_right');
        TankOnline.player.body.velocity.x =TankOnline.config.TANK_SPEED;
    }else if(TankOnline.keyboard.isDown(Phaser.KeyCode.LEFT)){
        TankOnline.player.loadTexture('tank_left');
        TankOnline.player.body.velocity.x =-TankOnline.config.TANK_SPEED;
    }else{
        TankOnline.player.body.velocity.x =0;
        TankOnline.player.body.velocity.y =0;
    }
};

