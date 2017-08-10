let tutorialState = {

    create: function() {
        // add sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        const tutorial = game.add.sprite(340, 220, 'tutorial');

        const T1 = game.add.sprite(600, 260, 'T1');
        settings.snapToGrid(T1);

        const T2 = game.add.sprite(10, 300, 'T2');
        settings.snapToGrid(T2);

        const T3 = game.add.sprite(30,400, 'T3');
        settings.snapToGrid(T3);

        settings.createText('Drag the elements to fit the square!', 30, 5, 0, 100);
        // TODO add winning condition, if T1, T2, T3
        // TODO add time measurement
        // TODO add scoreboard and UI
    },

    measureTime:function(){

    }


};