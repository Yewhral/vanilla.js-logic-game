let levelState = {

    create: function () {

        let background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        let tutorialButton = game.add.button(330,220,'mainMenuButton',this.tutorialStart,this,1,2,0);
        tutorialButton.width = 160;
        tutorialButton.height = 50;

        mechanics.createText('Pick a level', 30, 4, 0, 150);
        mechanics.createText('Tutorial', 20, 3, 0, 230);

        this.generateLvlButtons(3, 310, 1);
        this.generateLvlButtons(3, 400, 4);
    },

    generateLvlButtons: function (amount, positionY, rowFactor) {
        for(let i = 0; i < amount ; i++) {
            const but = game.add.button( 150 + i * 180, positionY, 'mainMenuButton', 0, this, 1, 2, 0);
            mechanics.createText(`Level ${i+rowFactor}`, 20, 3, -185 + i * 180, positionY + 10);
            but.events.onInputUp.add(levelState.levelStart, { param1:i+rowFactor });
        }
    },

    levelStart: function() {
        mechanics.resetTimer();
        mechanics.counter = this.param1 ;
        game.state.start(`level-${ this.param1 }`);
    },

    tutorialStart: function() {
        mechanics.resetTimer();
        mechanics.counter = 0 ;
        game.state.start('level-0');
    }

};