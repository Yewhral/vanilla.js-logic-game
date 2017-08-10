let tutorialState = {

    create: function() {

        let bounds = new Phaser.Rectangle(0, 0, 800, 600);

        // add sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;
        const tutorial = game.add.sprite(340, 220, 'tutorial');
        const T1 = game.add.sprite(600, 260, 'T1');
        T1.inputEnabled = true;
        T1.input.enableDrag();
        T1.input.enableSnap(20, 20, false, true);
        T1.input.boundsRect = bounds;
        const T2 = game.add.sprite(10, 300, 'T2');
        T2.inputEnabled = true;
        T2.input.enableDrag();
        T2.input.enableSnap(20, 20, false, true);
        T2.input.boundsRect = bounds;
        const T3 = game.add.sprite(30,400, 'T3');
        T3.inputEnabled = true;
        T3.input.enableDrag();
        T3.input.enableSnap(20, 20, false, true);
        T3.input.boundsRect = bounds;
        console.log(T3.anchor);

        settings.createText('Drag the elements to fit the square!', 30, 5, 0, 100);
        // TODO refactor inputs and boundaries
        // TODO add winning condition, if T1, T2, T3
        // TODO put newly added pngs through tinypng
        // TODO add time measurement
        // TODO add scoreboard and UI
        // TODO fix images to start and end on their boundaries
    },

    measureTime:function(){

    }


};