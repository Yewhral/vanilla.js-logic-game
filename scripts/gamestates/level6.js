let level6State = {

    create: function() {
        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        //creating UI
        mechanics.createInterface();

        //Adding texts
        mechanics.createText('Level 6 - ', 30, 5, 0, 100);

    },


};