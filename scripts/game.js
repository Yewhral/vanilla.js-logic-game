let game = new Phaser.Game(
    settings.width,
    settings.height,
    settings.renderer,
    'settings.parent'
);

game.state.add('load', loadState);
game.state.add('mainMenu', menuState);
game.state.add('pickLevel', levelState);
game.state.add('tutorial', tutorialState);
game.state.add('level-1', level1State);
game.state.add('level-2', level2State);
game.state.add('level-3', level3State);
game.state.add('level-4', level4State);
game.state.add('level-5', level5State);
game.state.add('level-6', level6State);


game.state.start('load');