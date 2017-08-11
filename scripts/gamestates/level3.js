let level3State = {

    create: function() {
        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;


        //Adding texts
        settings.createText('Level 3 - ', 30, 5, 0, 100);

    },


};