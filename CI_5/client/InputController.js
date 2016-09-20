/**
 * Created by hungm on 9/10/2016.
 */
class InputController{
    constructor(keymap,tankController){
        this.keymap = keymap;
        this.tankController = tankController;
    }
    update(){
        var direction = new Phaser.Point(0,0);
       if(TankOnline.keyboard.isDown(this.keymap.up)){
           direction.y =-1;

       }else if(TankOnline.keyboard.isDown(this.keymap.down)){
           direction.y =1;
       }
        if(TankOnline.keyboard.isDown(this.keymap.left)){
            direction.x =-1;

        }else if(TankOnline.keyboard.isDown(this.keymap.right)){
            direction.x =1;
        }

        this.tankController.move(direction);
        var tankPosition = this.tankController.sprite.position;
        TankOnline.client.move({
            direction: direction,
            position: tankPosition
        });



     if(TankOnline.keyboard.isDown(this.keymap.ban)){
         this.tankController.fire();

         TankOnline.client.fire({

             position: tankPosition
         })
}
    }
}