let tutorialState = {

    create: function() {
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        const tutorial = game.add.sprite(340, 220, 'tutorial');

        const T1 = game.add.sprite(settings.randomizeInitial(500,700), settings.randomizeInitial(200,300), 'T1');
        settings.snapToGrid(T1);

        const T2 = game.add.sprite(settings.randomizeInitial(10,200), settings.randomizeInitial(200,300), 'T2');
        settings.snapToGrid(T2);

        const T3 = game.add.sprite(settings.randomizeInitial(10,300), settings.randomizeInitial(350,450), 'T3');
        settings.snapToGrid(T3);

        settings.createText('Drag the elements to fit the square!', 30, 5, 0, 100);
        // TODO add winning condition, if T1, T2, T3
        // TODO add time measurement
        // TODO add scoreboard and UI
    },

    measureTime:function(){

    }


};