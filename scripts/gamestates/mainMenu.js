let menuState = {

    create: function() {

        // add sprites
        let background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;


        let startButton = game.add.button(320,290,'mainMenuButton',this.gameStart,this,1,2,0);
        let creditsButton = game.add.button(320,390,'mainMenuButton',this.showCredits,this,1,2,0);

        startButton.width = 160;
        startButton.height = 50;
        creditsButton.width = 160;
        creditsButton.height = 50;

        settings.createText('The Constructor', 60, 5, 0, 150);
        settings.createText('Play game', 20, 3, 0, 300);
        settings.createText('Credits', 20, 3, 0, 400);

    },

    gameStart:function(){
       // return false;
        game.state.start('pickLevel');
    },

    showCredits:function(){
        return false;
       // game.state.start('credits');
    },




};