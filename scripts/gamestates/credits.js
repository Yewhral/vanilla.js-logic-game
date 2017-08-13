let creditsState = {

    create: function() {
        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        //creating UI
        let btnWidth = 120;
        let btnHeight = 40;
        let button = game.add.button(20,15,'mainMenuButton', function(){
            mechanics.counter = 0;
            game.state.start('mainMenu');
        },this,1,2,0);
        button.height = btnHeight;
        button.width = btnWidth;
        button.alpha = 0.6;
        mechanics.createText('Main menu', 14, 1, -330, 25);

        //Adding texts
        mechanics.createText('Game made by Michał Zabrzyjewski ', 30, 5, 0, 100);

    },

};