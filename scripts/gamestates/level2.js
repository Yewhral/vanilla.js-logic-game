let level2State = {

    create: function() {
        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        //creating UI
        mechanics.createInterface();

        //Adding texts
        mechanics.createText('Level 2 - HTML Root', 30, 5, 0, 100);

        const levelTwo = game.add.sprite(300, 220, 'levelTwo');

        const block1 = game.add.sprite(mechanics.randomizeInitial(10,210), mechanics.randomizeInitial(290,320), 'block9');
        mechanics.snapToGrid(block1);

        const block2 = game.add.sprite(mechanics.randomizeInitial(10,200), mechanics.randomizeInitial(400,430), 'block10');
        mechanics.snapToGrid(block2);

        const block3 = game.add.sprite(mechanics.randomizeInitial(500,650), mechanics.randomizeInitial(150,200), 'block13');
        mechanics.snapToGrid(block3);

        const block4 = game.add.sprite(mechanics.randomizeInitial(550,650), mechanics.randomizeInitial(350,400), 'block15');
        mechanics.snapToGrid(block4);

        const block5 = game.add.sprite(mechanics.randomizeInitial(10,100), mechanics.randomizeInitial(100,200), 'block16');
        mechanics.snapToGrid(block5);

        const blocksArray = [block1, block2, block3, block4, block5];
        mechanics.assignDrags(blocksArray, level2State.checkPosition);
    },

    checkPosition: function() {
            if(this.block1.position.x === 380 && this.block1.position.y === 220 &&
                this.block2.position.x === 460 && this.block2.position.y === 340 &&
                this.block3.position.x === 300 && this.block3.position.y === 300 &&
                this.block4.position.x === 380 && this.block4.position.y === 260 &&
                this.block5.position.x === 420 && this.block5.position.y === 420) {
                mechanics.showEndgameInterface();
            }
    },


};