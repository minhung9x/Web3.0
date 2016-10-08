/**
 * Created by hungm on 9/10/2016.
 */
class ManController {
    constructor(id, x, y, manGroup, bomGroup, bomGroup2) {

        this.sprite = manGroup.create(x, y, 'bomberman');
        this.sprite.id = id;
        BO.game.physics.arcade.enable(this.sprite);
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.scale.setTo(1.7, 1.7);
        this.sprite.animations.add('manDown', [6, 7, 8]);
        this.sprite.animations.play('manDown', 10, true);
        this.bomGroup = bomGroup;
        this.bomGroup2 = bomGroup2;
        this.sprite.ok = true;
    }

    move(direction) {
        if (direction.y > 0) {

            this.sprite.animations.add('manDown', [6, 7, 8]);
            this.sprite.animations.play('manDown', 10, true);

            this.sprite.body.velocity.y = BO.config.MAN_SPEED;

        } else if (direction.y < 0) {
            this.sprite.animations.add('manUp', [9, 10, 11]);
            this.sprite.animations.play('manUp', 10, true);
            this.sprite.body.velocity.y = -BO.config.MAN_SPEED;
        } else {
            this.sprite.body.velocity.y = 0;
        }

        if (direction.x > 0) {
            this.sprite.animations.add('manRight', [3, 4, 5]);
            this.sprite.animations.play('manRight', 10, true);
            this.sprite.body.velocity.x = BO.config.MAN_SPEED;
        } else if (direction.x < 0) {
            this.sprite.animations.add('manLeft', [0, 1, 2]);
            this.sprite.animations.play('manLeft', 10, true);
            this.sprite.body.velocity.x = -BO.config.MAN_SPEED;
        } else {
            this.sprite.body.velocity.x = 0;

        }
    }

    fire() {
        if (this.sprite.ok) {

            // new BomController(this.sprite.position.x,this.sprite.position.y,this.bomGroup,this.bomGroup2);
            var pos = {};
            pos = BO.datBom(this.sprite.position.x, this.sprite.position.y);
            new BomController(pos.x, pos.y, this.bomGroup, this.bomGroup2);
            BO.client.bomNo({position: this.sprite.position});
            this.sprite.ok = false;
            setTimeout(function () {
                this.sprite.ok = true;
            }.bind(this), 400);


        }

    }

    // newBom() {
    //     //if(!this.sprite.alive) return;
    //     var pos = {};
    //     pos = BO.datBom(this.sprite.position.x, this.sprite.position.y);
    //     new BomController(pos.x, pos.y, this.bomGroup, this.bomGroup2);
    //
    // }


    destroy() {
        this.sprite.destroy();
    }

}
