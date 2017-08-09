let game = new Phaser.Game(
    settings.width,
    settings.height,
    settings.renderer,
    'settings.parent'
);

game.state.add('mainMenu', menuState);

game.state.start('mainMenu');