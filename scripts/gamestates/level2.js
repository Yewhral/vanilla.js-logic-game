let level2State = {

    create: function() {
        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;


        //Adding texts
        mechanics.createText('Level 2 - ', 30, 5, 0, 100);

    },


};