let loadState = {

    preload:function() {

        // load everything that we need to load
        game.load.image('mainMenuBg', 'images/backgrounds/menuBackground.png');
        game.load.image('tutorial', 'images/sprites/tutorial.png');
        game.load.image('levelOne', 'images/sprites/levelOne.png');
        game.load.image('block1', 'images/sprites/T1.png');
        game.load.image('block2', 'images/sprites/T2.png');
        game.load.image('block3', 'images/sprites/T3.png');
        game.load.image('block4', 'images/sprites/T4.png');
        game.load.image('block5', 'images/sprites/T5.png');
        game.load.image('block6', 'images/sprites/T6.png');

        game.load.spritesheet('mainMenuButton', 'images/sprites/menuButtons.png', 150, 50);

    },

    create:function() {
        game.state.start('mainMenu');
    }

};