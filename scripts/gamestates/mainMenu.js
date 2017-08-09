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


        game.add.text(0,0,
            'Play game',
            {
                font: "Arial",
                fontSize: settings.interfaceSize,
                fill: "#ffffff",
                stroke: settings.interfaceStroke,
                strokeThickness: settings.interfaceStrokeThickness,
                align: 'center',
                boundsAlignH: "center",
                boundsAlignV: "center"
            })
            .setTextBounds(0, 300,800,600);

        game.add.text(0,0,
            'Credits',
            {
                font: "Arial",
                fontSize: settings.interfaceSize,
                fill: "#ffffff",
                stroke: settings.interfaceStroke,
                strokeThickness: settings.interfaceStrokeThickness,
                align: 'center',
                boundsAlignH: "center",
                boundsAlignV: "center"
            })
            .setTextBounds(0,400,800,600);
    },

    gameStart:function(){
        return false;
       // game.state.start('pickDifficulty');
    },

    showCredits:function(){
        return false;
       // game.state.start('credits');
    },




};