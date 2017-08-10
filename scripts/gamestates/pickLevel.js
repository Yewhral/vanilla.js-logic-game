let levelState = {

    create: function () {

        let background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        let tutorialButton = game.add.button(320,220,'mainMenuButton',this.tutorialStart,this,1,2,0);
        tutorialButton.width = 160;
        tutorialButton.height = 50;

        settings.createText('Pick a level', 30, 4, 0, 150);
        settings.createText('Tutorial', 20, 3, 0, 230);

        this.generateLvlButtons(3, 310, 1);
        this.generateLvlButtons(3, 400, 4);
    },

    generateLvlButtons: function (amount, y, row) {
        for(let i = 0; i < amount ; i++) {
            game.add.button(140+i*180, y, 'mainMenuButton', this.levelStart, this, 1, 2, 0);        //TODO bind adequate function to each button - find out how to pass arguments here
            settings.createText(`Level ${i+row}`, 20, 3, -185+i*180, y+10);
        }
    },

    levelStart: function() {
        return false;
        // game.state.start(`level+${i}`);
    },

    tutorialStart: function() {
        game.state.start('tutorial');
    }




};