let loadState = {

    preload:function() {

        // load everything that we need to load
        game.load.image('mainMenuBg', 'images/backgrounds/menuBackground.png');
        game.load.image('tutorial', 'images/sprites/tutorial.png');
        game.load.image('T1', 'images/sprites/T12.png');
        game.load.image('T2', 'images/sprites/T22.png');
        game.load.image('T3', 'images/sprites/T32.png');

        game.load.spritesheet('mainMenuButton', 'images/sprites/menuButtons.png', 150, 50);

    },

    create:function() {
        game.state.start('mainMenu');
    }

};