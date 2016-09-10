/**
 * Created by hungm on 8/30/2016.
 */
var TankOnline ={
    config:{
        TANK_SPEED:300,
        BULLET_SPEED:700,
        OK: true
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
var ok1 = true;
var ok2 = true;
var preload = function(){
    TankOnline.game.load.image('tank_down','./images/tank_player1_down_c0_t1_s1.png');
    TankOnline.game.load.image('tank_up','./images/tank_player1_up_c0_t1_s1.png');
    TankOnline.game.load.image('tank_left','./images/tank_player1_left_c0_t1_s1.png');
    TankOnline.game.load.image('tank_right','./images/tank_player1_right_c0_t1_s1.png');

    //load bullet
    TankOnline.game.load.image('bullet_down','./images/bullet_down.png');
    TankOnline.game.load.image('bullet_up','./images/bullet_up.png');
    TankOnline.game.load.image('bullet_left','./images/bullet_left.png');
    TankOnline.game.load.image('bullet_right','./images/bullet_right.png');

};
var create = function(){



    TankOnline.game.physics.startSystem(Phaser.Physics.ARCADE);
    TankOnline.keyboard = TankOnline.game.input.keyboard;

    TankOnline.player=TankOnline.game.add.sprite(200,200,'tank_down');
    TankOnline.player2=TankOnline.game.add.sprite(500,500,'tank_up');

   TankOnline.game.physics.arcade.enable(TankOnline.player);
    TankOnline.game.physics.arcade.enable(TankOnline.player2);

    TankOnline.player.anchor.set(0.5,0.5);
    TankOnline.player2.anchor.set(0.5,0.5);



};
var update = function(){
    //tank 1
    if(TankOnline.keyboard.isDown(Phaser.KeyCode.DOWN)){
        TankOnline.player.loadTexture('tank_down');
        TankOnline.player.body.velocity.y = TankOnline.config.TANK_SPEED;

    }else if(TankOnline.keyboard.isDown(Phaser.KeyCode.UP)){
        TankOnline.player.loadTexture('tank_up');
        TankOnline.player.body.velocity.y = -TankOnline.config.TANK_SPEED;
    }else if(TankOnline.keyboard.isDown(Phaser.KeyCode.RIGHT)){
        TankOnline.player.loadTexture('tank_right');
        TankOnline.player.body.velocity.x = TankOnline.config.TANK_SPEED;
    }else if(TankOnline.keyboard.isDown(Phaser.KeyCode.LEFT)){
        TankOnline.player.loadTexture('tank_left');
        TankOnline.player.body.velocity.x = -TankOnline.config.TANK_SPEED;
    }else{
        TankOnline.player.body.velocity.x = 0;
        TankOnline.player.body.velocity.y = 0;
    }
//tank2
    if(TankOnline.keyboard.isDown(Phaser.KeyCode.S)){
        TankOnline.player2.loadTexture('tank_down');
        TankOnline.player2.body.velocity.y = TankOnline.config.TANK_SPEED;

    }else if(TankOnline.keyboard.isDown(Phaser.KeyCode.W)){
        TankOnline.player2.loadTexture('tank_up');
        TankOnline.player2.body.velocity.y = -TankOnline.config.TANK_SPEED;
    }else if(TankOnline.keyboard.isDown(Phaser.KeyCode.D)){
        TankOnline.player2.loadTexture('tank_right');
        TankOnline.player2.body.velocity.x = TankOnline.config.TANK_SPEED;
    }else if(TankOnline.keyboard.isDown(Phaser.KeyCode.A)){
        TankOnline.player2.loadTexture('tank_left');
        TankOnline.player2.body.velocity.x = -TankOnline.config.TANK_SPEED;
    }else{
        TankOnline.player2.body.velocity.x = 0;
        TankOnline.player2.body.velocity.y = 0;
    }




    if(TankOnline.keyboard.isDown(Phaser.KeyCode.SPACEBAR) && ok1==true){

    switch(TankOnline.player.key){
        case 'tank_down':
             var speed = new Phaser.Point(0,TankOnline.config.BULLET_SPEED);
           var status = 'bullet_down';
            break;
        case 'tank_up':
           var  speed = new Phaser.Point(0,-TankOnline.config.BULLET_SPEED);
          var  status = 'bullet_up';
            break;
        case 'tank_right':
         var    speed = new Phaser.Point(TankOnline.config.BULLET_SPEED,0);
          var  status = 'bullet_right';
            break;
        case 'tank_left':
           var  speed = new Phaser.Point(-TankOnline.config.BULLET_SPEED,0);
           var status = 'bullet_left';
            break;
        default :  var speed = new Phaser.Point(0,TankOnline.config.BULLET_SPEED);
          var  status = 'bullet_down';


    }
    TankOnline.bullet = TankOnline.game.add.sprite(TankOnline.player.position.x,TankOnline.player.position.y,status);
    TankOnline.game.physics.arcade.enable(TankOnline.bullet);
    TankOnline.bullet.anchor.set(0.5,0.5);
    TankOnline.bullet.body.velocity = speed;
   ok1=false;
        setTimeout(function(){
            ok1 = true;
        },200);

  }


    if(TankOnline.keyboard.isDown(Phaser.KeyCode.H) && ok2==true){

        switch(TankOnline.player2.key){
            case 'tank_down':
                var speed = new Phaser.Point(0,TankOnline.config.BULLET_SPEED);
                var status = 'bullet_down';
                break;
            case 'tank_up':
                var  speed = new Phaser.Point(0,-TankOnline.config.BULLET_SPEED);
                var  status = 'bullet_up';
                break;
            case 'tank_right':
                var    speed = new Phaser.Point(TankOnline.config.BULLET_SPEED,0);
                var  status = 'bullet_right';
                break;
            case 'tank_left':
                var  speed = new Phaser.Point(-TankOnline.config.BULLET_SPEED,0);
                var status = 'bullet_left';
                break;
            default :  var speed = new Phaser.Point(0,TankOnline.config.BULLET_SPEED);
                var  status = 'bullet_down';


        }
        TankOnline.bullet = TankOnline.game.add.sprite(TankOnline.player2.position.x,TankOnline.player2.position.y,status);
        TankOnline.game.physics.arcade.enable(TankOnline.bullet);
        TankOnline.bullet.anchor.set(0.5,0.5);
        TankOnline.bullet.body.velocity = speed;
        ok2 = false;
        setTimeout(function(){
           ok2 = true;
        },200);

    }
};


