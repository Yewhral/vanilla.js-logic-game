let level1State = {

    create: function() {
        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;


        //Adding texts
        settings.createText('Level 1 - ', 30, 5, 0, 100);


/*
        const block1 = game.add.sprite(settings.randomizeInitial(500,700), settings.randomizeInitial(200,300), 'block1');
        settings.snapToGrid(block1);

        const block2 = game.add.sprite(settings.randomizeInitial(10,200), settings.randomizeInitial(200,300), 'block2');
        settings.snapToGrid(block2);

        const block3 = game.add.sprite(settings.randomizeInitial(10,300), settings.randomizeInitial(350,450), 'block3');
        settings.snapToGrid(block3);

        //Adding texts
        settings.createText('Drag the elements to fit the square!', 30, 5, 0, 100);

        //Adding events
        block1.events.onDragStop.add(tutorialState.checkPosition,{block1:block1,block2:block2,block3:block3});
        block2.events.onDragStop.add(tutorialState.checkPosition,{block1:block1,block2:block2,block3:block3});
        block3.events.onDragStop.add(tutorialState.checkPosition,{block1:block1,block2:block2,block3:block3});
        */
    },


    checkPosition: function() {
        console.log(this.block1.position);
        console.log(this.block2.position);
        console.log(this.block3.position);
        if(this.block1.position.x === 340 && this.block1.position.y === 220 &&
            this.block2.position.x === 380 && this.block2.position.y === 220 &&
            this.block3.position.x === 380 && this.block3.position.y === 260) {
            tutorialState.displayScoreboard();
        }
    },
};