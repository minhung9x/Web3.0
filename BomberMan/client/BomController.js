/**
 * Created by hungm on 9/24/2016.
 */
class BomController {
    constructor(x, y, bomGroup, bomGroup2) {

        // if (bomGroup != null) {
        //     this.sprite = bomGroup.create(x * 36, y * 36, 'bomb');
        //     BO.game.physics.arcade.enable(this.sprite);
        //     this.sprite.body.immovable = true;
        //     this.sprite.scale.setTo(2, 2);
        //     this.sprite.animations.add('bomb', [0, 1, 2]);
        //     this.sprite.animations.play('bomb', 10, true);
        // } else if (bomGroup2 != null) {
        //     this.sprite = bomGroup2.create(x * 36, y * 36, 'bomb-center');
        //     BO.game.physics.arcade.enable(this.sprite);
        //     this.sprite.scale.setTo(2, 2);
        //     this.sprite.animations.add('bomb-center', [0, 1, 2, 3]);
        //     this.sprite.animations.play('bomb-center', 10, false, true);
        // }
        this.x = x;
        this.y = y;
        this.sprite = bomGroup.create(x * 36, y * 36, 'bomb');
        BO.game.physics.arcade.enable(this.sprite);
        this.sprite.body.immovable = true;
        this.sprite.scale.setTo(2, 2);
        this.sprite.animations.add('bomb', [0, 1, 2]);
        this.sprite.animations.play('bomb', 10, true);
        setTimeout(function () {
            this.sprite.kill();
            this.sprite = bomGroup2.create(x * 36, y * 36, 'bomb-center');
            this.sprite.scale.setTo(2, 2);
            this.sprite.animations.add('bomb-center', [0, 1, 2, 3]);
            this.sprite.animations.play('bomb-center', 10, false, true);

            if (BO.map[y][x-1] == 0) {
                this.sprite = bomGroup2.create((x-1) * 36, (y) * 36, 'bomb-left');
                this.sprite.scale.setTo(2.5, 2);
                this.sprite.animations.add('bomb-left', [0, 1, 2, 3]);
                this.sprite.animations.play('bomb-left', 10, false, true);

            }

            if (BO.map[y][x+1] == 0) {
                this.sprite = bomGroup2.create((x+1) * 36-10, (y) * 36, 'bomb-right');
                this.sprite.scale.setTo(2.5, 2);
                this.sprite.animations.add('bomb-right', [0, 1, 2, 3]);
                this.sprite.animations.play('bomb-right', 10, false, true);

            }
            if (BO.map[y-1][x] == 0) {
                this.sprite = bomGroup2.create((x) * 36, (y-1) * 36, 'bomb-top');
                this.sprite.scale.setTo(2, 2.5);
                this.sprite.animations.add('bomb-top', [0, 1, 2, 3]);
                this.sprite.animations.play('bomb-top', 10, false, true);

            }
            if (BO.map[y+1][x] == 0) {
                this.sprite = bomGroup2.create((x) * 36, (y+1) * 36-10, 'bomb-bot');
                this.sprite.scale.setTo(2, 2.5);
                this.sprite.animations.add('bomb-bot', [0, 1, 2, 3]);
                this.sprite.animations.play('bomb-bot', 10, false, true);

            }


        }.bind(this), BO.config.BOM_TIME);

    }


}