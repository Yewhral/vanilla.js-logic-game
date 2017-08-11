let level0State = {

    create: function() {

        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        //creating UI
        mechanics.createInterface();

        //creating items
        const tutorial = game.add.sprite(340, 220, 'tutorial');

        const block1 = game.add.sprite(mechanics.randomizeInitial(500,700), mechanics.randomizeInitial(200,300), 'block1');
        mechanics.snapToGrid(block1);

        const block2 = game.add.sprite(mechanics.randomizeInitial(10,200), mechanics.randomizeInitial(200,300), 'block2');
        mechanics.snapToGrid(block2);

        const block3 = game.add.sprite(mechanics.randomizeInitial(10,300), mechanics.randomizeInitial(350,450), 'block3');
        mechanics.snapToGrid(block3);

        //Adding texts
        mechanics.createText('Drag the elements to fit the square!', 30, 5, 0, 100);

        //Adding events
        const blocksArray = [block1, block2, block3];
        mechanics.assignDrags(blocksArray, level0State.checkPosition);
    },

    checkPosition: function() {
        if(this.block1.position.x === 340 && this.block1.position.y === 220 &&
           this.block2.position.x === 380 && this.block2.position.y === 220 &&
           this.block3.position.x === 380 && this.block3.position.y === 260) {
           level0State.displayScoreboard();
        }
    },

    displayScoreboard: function(){
        console.log('YOU WIN!!!');
        mechanics.createText('The faster you are the better your score!', 20, 5, 0, 450);
        mechanics.showEndgameInterface();
    },

    measureTime: function() {

    }

};