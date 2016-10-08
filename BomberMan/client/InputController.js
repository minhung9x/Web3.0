/**
 * Created by hungm on 9/10/2016.
 */
class InputController{
    constructor(keymap,manController){
        this.keymap = keymap;
        this.manController = manController;
    }
    update(){
        var direction = new Phaser.Point(0,0);
       if(BO.keyboard.isDown(this.keymap.up)){
           direction.y =-1;

       }else if(BO.keyboard.isDown(this.keymap.down)){
           direction.y =1;
       }
        if(BO.keyboard.isDown(this.keymap.left)){
            direction.x =-1;

        }else if(BO.keyboard.isDown(this.keymap.right)){
            direction.x =1;
        }

        this.manController.move(direction);
        var manPosition = this.manController.sprite.position;

        console.log('Sending move data');
        BO.client.move({
            direction : direction,
            position  : manPosition
        });

        // var manPosition = this.manController.sprite.position;
        // TankOnline.client.move({
        //     direction: direction,
        //     position: tankPosition
        // });
        if(BO.keyboard.isDown(this.keymap.ban)){
            this.manController.fire();


        }




    }
}