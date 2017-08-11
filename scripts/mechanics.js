let mechanics = {

    counter: 0,     // traces current level

    //game settings
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

    createInterface: function() {
        let btnWidth = 120;
        let btnHeight = 40;
        let button = game.add.button(10,15,'mainMenuButton', function(){
            mechanics.counter = 0;
            game.state.start('mainMenu');
        },this,1,2,0);
        button.height = btnHeight;
        button.width = btnWidth;
        button.alpha = 0.6;
        button = game.add.button(140,15,'mainMenuButton', mechanics.restartLevel,this,1,2,0);
        button.height = btnHeight;
        button.width = btnWidth;
        button.alpha = 0.7;
        mechanics.createText('Main menu', 14, 1, -330, 25);
        mechanics.createText('Restart level', 14, 1, -200, 25);
    },

    passProps: function(array){
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
    },

    showEndgameInterface: function(){
        game.add.button(325,540,'mainMenuButton',mechanics.takeToTheNextLevel,this,1,2,0);
        mechanics.createText('Next level', 20, 3, 0, 550);
    },

    takeToTheNextLevel: function(){
        mechanics.counter += 1;
        game.state.start(`level-${mechanics.counter}`);
    },

    restartLevel: function(){
        game.state.start(`level-${mechanics.counter}`);
    }

};

