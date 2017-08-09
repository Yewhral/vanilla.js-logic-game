let menuState = {

    create: function() {
/*
        // add sprites
        let background = game.add.sprite(0, 0, 'mainMenuBackground');
        background.height = this.game.height;
        background.width = this.game.width;

        let startButton = game.add.button(0.167*this.game.width,0.195*this.game.height,'mainMenuButton',this.gameStart,this,1,2,0);
        let gameDetailsButton = game.add.button(0.167*this.game.width,0.3888*this.game.height,'mainMenuButton',this.showCredits,this,1,2,0);

        startButton.width = 0.2265625*this.game.width;
        startButton.height = 0.1018519*this.game.height;
        gameDetailsButton.width = 0.2265625*this.game.width;
        gameDetailsButton.height = 0.1018519*this.game.height;
*/
        game.add.text(
            5,
            5,
            'Play game', {
                font: "Arial",
                fontSize:settings.interfaceSize,
                fill: "#ffffff",
                stroke: settings.interfaceStroke,
                strokeThickness: settings.interfaceStrokeThickness,
                align: 'center',
            })
            .setTextBounds(0,0,0,0);

        game.add.text(
            5,
            5,
            'Credits', {
                font: "Arial",
                fontSize:settings.interfaceSize,
                fill: "#ffffff",
                stroke: settings.interfaceStroke,
                strokeThickness: settings.interfaceStrokeThickness,
                align: 'center',
            })
            .setTextBounds(0,0,0,0);
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