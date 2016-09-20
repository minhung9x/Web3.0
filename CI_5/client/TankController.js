/**
 * Created by hungm on 9/10/2016.
 */
class TankController {
    constructor(id, x, y, group, group2) {

        this.sprite = group.create(x, y, 'tank_down');
        TankOnline.game.physics.arcade.enable(this.sprite);
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.ok = true;
        this.sprite.id = id;
        this.sprite.bulletGroup = group2;
    }

    move(direction) {
        if (direction.y > 0) {
            this.sprite.loadTexture('tank_down');
            this.sprite.body.velocity.y = TankOnline.config.TANK_SPEED;

        } else if (direction.y < 0) {
            this.sprite.loadTexture('tank_up');
            this.sprite.body.velocity.y = -TankOnline.config.TANK_SPEED;
        } else {
            this.sprite.body.velocity.y = 0;
        }

        if (direction.x > 0) {
            this.sprite.loadTexture('tank_right');
            this.sprite.body.velocity.x = TankOnline.config.TANK_SPEED;
        } else if (direction.x < 0) {
            this.sprite.loadTexture('tank_left');
            this.sprite.body.velocity.x = -TankOnline.config.TANK_SPEED;
        } else {
            this.sprite.body.velocity.x = 0;

        }
    }

    fire() {
        if (!this.sprite.alive) return;

        if (this.sprite.ok == true) {

            switch (this.sprite.key){
                case 'tank_down':
                    var speed = new Phaser.Point(0, TankOnline.config.BULLET_SPEED);
                    var status = 'bullet_down';
                    break;
                case 'tank_up':
                    var speed = new Phaser.Point(0, -TankOnline.config.BULLET_SPEED);
                    var status = 'bullet_up';
                    break;
                case 'tank_right':
                    var speed = new Phaser.Point(TankOnline.config.BULLET_SPEED, 0);
                    var status = 'bullet_right';
                    break;
                case 'tank_left':
                    var speed = new Phaser.Point(-TankOnline.config.BULLET_SPEED, 0);
                    var status = 'bullet_left';
                    break;
                default :
                    var speed = new Phaser.Point(0, TankOnline.config.BULLET_SPEED);
                    var status = 'bullet_down';


            }

            var bullet = this.sprite.bulletGroup.create(this.sprite.position.x, this.sprite.position.y, status);

            TankOnline.game.physics.arcade.enable(bullet);
            bullet.tankId = this.sprite.id;
            bullet.anchor.set(0.5, 0.5);
            bullet.body.velocity = speed;
            this.sprite.ok = false;
            setTimeout(function () {
                this.sprite.ok = true;
            }.bind(this), 200);

        }
    }
}
