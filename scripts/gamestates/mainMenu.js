let menuState = {

    create: function() {

        // add sprites
        let background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;


        let startButton = game.add.button(330,260,'mainMenuButton',this.gameStart,this,1,2,0);
        let creditsButton = game.add.button(330,340,'mainMenuButton',this.showCredits,this,1,2,0);
        let scoresButton = game.add.button(330,420,'mainMenuButton',this.showScoreboard,this,1,2,0);

        startButton.width = 160;
        startButton.height = 50;
        creditsButton.width = 160;
        creditsButton.height = 50;
        scoresButton.width = 160;
        scoresButton.height = 50;

        mechanics.createText('The Constructor', 60, 5, 0, 130);
        mechanics.createText('Play game', 20, 3, 0, 270);
        mechanics.createText('Credits', 20, 3, 0, 350);
        mechanics.createText('Scoreboard', 20, 3, 0, 430);

    },

    gameStart:function(){
        game.state.start('pickLevel');
    },

    showCredits:function(){
        game.state.start('credits');
    },

    showScoreboard: function () {
        game.state.start('scoreboard');
    }




};