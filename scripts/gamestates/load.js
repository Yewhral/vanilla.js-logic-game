let loadState = {

    preload:function() {

        // load everything that we need to load
        // ideally I would use some node.js here to grab all files and load all content of /images file
        game.load.image('mainMenuBg', 'images/backgrounds/menuBackground.png');
        game.load.image('tutorial', 'images/sprites/tutorial.png');
        game.load.image('levelOne', 'images/sprites/levelOne.png');
        game.load.image('levelTwo', 'images/sprites/levelTwo.png');
        game.load.image('levelThree', 'images/sprites/levelThree.png');
        game.load.image('levelFour', 'images/sprites/levelFour.png');
        game.load.image('levelFive', 'images/sprites/levelFive.png');
        game.load.image('block1', 'images/sprites/T1.png');
        game.load.image('block2', 'images/sprites/T2.png');
        game.load.image('block3', 'images/sprites/T3.png');
        game.load.image('block4', 'images/sprites/T4.png');
        game.load.image('block5', 'images/sprites/T5.png');
        game.load.image('block6', 'images/sprites/T6.png');
        game.load.image('block7', 'images/sprites/T7.png');
        game.load.image('block8', 'images/sprites/T8.png');
        game.load.image('block9', 'images/sprites/T9.png');
        game.load.image('block10', 'images/sprites/T10.png');
        game.load.image('block11', 'images/sprites/T11.png');
        game.load.image('block12', 'images/sprites/T12.png');
        game.load.image('block13', 'images/sprites/T13.png');
        game.load.image('block14', 'images/sprites/T14.png');
        game.load.image('block15', 'images/sprites/T15.png');
        game.load.image('block16', 'images/sprites/T16.png');
        game.load.image('block17', 'images/sprites/T17.png');
        game.load.image('block18', 'images/sprites/T18.png');
        game.load.image('block19', 'images/sprites/T19.png');
        game.load.image('block20', 'images/sprites/T20.png');
        game.load.image('block21', 'images/sprites/T21.png');

        game.load.spritesheet('mainMenuButton', 'images/sprites/menuButtons.png', 150, 50);

    },

    create:function() {
        game.state.start('mainMenu');
    }

};