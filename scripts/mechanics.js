let mechanics = {

    width: 800,                //game width
    height: 600,                //game height
    renderer: Phaser.CANVAS,
    parent: 'phaser-example',

    // text settings
     createText: function(text, size, thick, X0, Y0){
        game.add.text(0,0,
            text,
            {
                font: 'Arial',
                fontSize: size,
                fill: '#ffffff',
                stroke: '#000000',
                strokeThickness: thick,
                align: 'center',
                boundsAlignH: "center",
                boundsAlignV: "center"
            })
            .setTextBounds(X0, Y0, this.width,this.height);
    },

    // game mechanics settings
    assignDrags: function(array, context) {
         for(let i = 0; i < array.length; i++) {
             array[i].events.onDragStop.add(context,mechanics.passProps(array));
         }
    },

    passProps(array){
         let object = {};
         for(let j = 0; j < array.length; j++) {
            object[`block${j + 1}`] = array[j];
        }
        return object;
    },

    randomizeInitial: function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    snapToGrid: function(element){
        const bounds = new Phaser.Rectangle(0, 0, 800, 600);
        element.inputEnabled = true;
        element.input.enableDrag();
        element.input.enableSnap(20, 20, false, true);
        element.input.boundsRect = bounds;
    }

};

