let settings = {

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
    snapToGrid: function(element){
        const bounds = new Phaser.Rectangle(0, 0, 800, 600);
        element.inputEnabled = true;
        element.input.enableDrag();
        element.input.enableSnap(20, 20, false, true);
        element.input.boundsRect = bounds;
    },
    randomizeInitial: function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

};

