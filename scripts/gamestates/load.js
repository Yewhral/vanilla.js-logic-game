let loadState = {

    preload:function() {

        // load everything that we need to load
        game.load.image('mainMenuBg', 'images/backgrounds/menuBackground.png');

        game.load.spritesheet('mainMenuButton', 'images/sprites/menuButtons.png', 150, 50);

    },

    create:function() {
        game.state.start('mainMenu');
    }

};