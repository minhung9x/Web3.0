/**
 * Created by hungm on 8/30/2016.
 */
var BO = {
    config: {
        MAN_SPEED: 250,
        BOM_TIME: 3000

    },
    map: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
};


window.onload = function () {
    BO.game = new Phaser.Game(900, 600,
        Phaser.AUTO, '',
        {
            preload: preload,
            create: create,
            update: update
        });

};

var preload = function () {
    BO.game.load.spritesheet('bomberman', 'images/bomberman-move.png', 16, 18);
    BO.game.load.spritesheet('bomb', 'images/bomb.png', 18, 18);
    BO.game.load.spritesheet('bomb-center', 'images/bomb-center.png', 18, 18);
    BO.game.load.spritesheet('wall', 'images/brick.png', 18, 18);

    BO.game.load.spritesheet('bomb-top', 'images/bomb-top.png', 18, 18);
    BO.game.load.spritesheet('bomb-left', 'images/bomb-left.png', 18, 18);
    BO.game.load.spritesheet('bomb-bot', 'images/bomb-bot.png', 18, 18);
    BO.game.load.spritesheet('bomb-right', 'images/bomb-right.png', 18, 18);


    BO.game.load.image('background', 'images/background.png');

};
var create = function () {

    BO.game.physics.startSystem(Phaser.Physics.ARCADE);
    BO.game.stage.disableVisibilityChange = true;
    BO.keyboard = BO.game.input.keyboard;
    //

    BO.game.stage.backgroundColor = "#4488AA";
    BO.bomGroup = BO.game.add.physicsGroup();
    BO.bomGroup2 = BO.game.add.physicsGroup();

    BO.manGroup = BO.game.add.physicsGroup();

    BO.wallGroup = BO.game.add.physicsGroup();

    for (var i = 0; i < BO.map.length; i++) {
        for (var j = 0; j < BO.map[i].length; j++) {
            if (BO.map[i][j] == 1 || BO.map[i][j] == 2) {
                var newWall = BO.wallGroup.create(j * 36, i * 36, 'wall');
                if (BO.map[i][j] == 1) {
                    newWall.animations.add('steel', [0]);
                } else {
                    newWall.animations.add('steel', [1]);
                    newWall.animations.play('steel', 0, false);
                }
                newWall.scale.setTo(2, 2);
                newWall.body.immovable = true;
            }


        }
    }

    var i, j;
    i = j = 0;
while(BO.map[i][j] == 1 || BO.map[i][j] == 2){
    i = rnd(17);
    j = rnd(25);
}


    console.log("x: " + i + "   y: " + j);
    i = i * 36 + 18;
    j = j * 36 + 18;

    var manPos = new Phaser.Point(i, j);

    BO.client = new Client(manPos);

    BO.inputController = new InputController({
        up: Phaser.KeyCode.UP,
        down: Phaser.KeyCode.DOWN,
        left: Phaser.KeyCode.LEFT,
        right: Phaser.KeyCode.RIGHT,
        ban: Phaser.KeyCode.SPACEBAR
    }, new ManController(BO.client.socket.id, manPos.x, manPos.y, BO.manGroup, BO.bomGroup, BO.bomGroup2));


};
var update = function () {
    BO.game.physics.arcade.collide(BO.manGroup, BO.wallGroup);
    BO.game.physics.arcade.collide(BO.bomGroup, BO.manGroup);
    BO.game.physics.arcade.overlap(BO.manGroup, BO.bomGroup2, function (manSprite) {
        manSprite.kill();
    }, null, this);
    BO.inputController.update();


};

BO.datBom = function (x, y) {
    var bom = {};
    bom.x = Math.floor(x / 36);
    bom.y = Math.floor(y / 36);
    return bom;
};

BO.otherMen = {};

BO.onNewPlayerJoined = function (msg) {
    BO.otherMen[msg.id] = new ManController(msg.id,
        msg.x,
        msg.y,
        BO.manGroup, BO.bomGroup);
};

BO.onReceivedMenInfo = function (msg) {
    for (key in msg) {
        if (msg.hasOwnProperty(key)) {
            BO.otherMen[msg[key].id] = new ManController(
                msg[key].id,
                msg[key].x,
                msg[key].y,
                BO.manGroup,
                BO.bomGroup,
                BO.bomGroup2);
        }
    }
};

BO.onPlayerManMoved = function (msg) {
    if (BO.otherMen[msg.id]) {
        BO.otherMen[msg.id].sprite.position = msg.position;
        BO.otherMen[msg.id].move(msg.direction);
    }
};
BO.onPlayerBomNoed = function (msg) {

    if (BO.otherMen[msg.id]) {

        BO.otherMen[msg.id].sprite.position = msg.position;
        // BO.otherMen[msg.id].newBom();
        var pos = {};
        pos = BO.datBom(msg.position.x, msg.position.y);
        new BomController(pos.x, pos.y, this.bomGroup, this.bomGroup2);


    }
};
var rnd = function (y) {
    var x = parseInt(Math.floor(Math.random() * y));

    return x;
};
// var onBomHitMan = function (manSprite,bom2Sprite) {
//     if(manSprite.id==BO.inputController.manController.sprite.id){
//         var pos = BO.datBom(manSprite.position.x,manSprite.position.y);
//         manSprite.kill();
//        // var pos = BO.datBom(manSprite.position.x,manSprite.position.y);
//         BO.client.manDie({postiotion:pos});
//     }
// }

// BO.onPlayerManDied = function (msg) {
//     if(BO.otherMen[msg.id]){
//         BO.otherMen[msg.id].sprite.position = msg.position;
//         BO.otherMen[msg.id].sprite.kill();
//     }
// };

BO.onPlayerDis = function (msg) {
    BO.otherMen[msg].destroy();
    delete  BO.otherMen[msg];
};


