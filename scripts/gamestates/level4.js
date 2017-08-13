let level4State = {

    create: function() {
        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        //creating UI
        mechanics.createInterface();

        //Adding texts
        mechanics.createText('Level 4 - Backbone', 30, 5, 0, 100);
        const levelFour = game.add.sprite(240, 240, 'levelFour');

        const block1 = game.add.sprite(mechanics.randomizeInitial(220,260), mechanics.randomizeInitial(410,440), 'block3');
        mechanics.snapToGrid(block1);

        const block2 = game.add.sprite(mechanics.randomizeInitial(350,440), mechanics.randomizeInitial(410,440), 'block4');
        mechanics.snapToGrid(block2);

        const block3 = game.add.sprite(mechanics.randomizeInitial(570,670), mechanics.randomizeInitial(100,160), 'block6');
        mechanics.snapToGrid(block3);

        const block4 = game.add.sprite(mechanics.randomizeInitial(10,180), mechanics.randomizeInitial(100,180), 'block9');
        mechanics.snapToGrid(block4);

        const block5 = game.add.sprite(mechanics.randomizeInitial(10,120), mechanics.randomizeInitial(280,400), 'block13');
        mechanics.snapToGrid(block5);

        const block6 = game.add.sprite(mechanics.randomizeInitial(580,670), mechanics.randomizeInitial(370,400), 'block20');
        mechanics.snapToGrid(block6);

        const block7 = game.add.sprite(mechanics.randomizeInitial(600,700), mechanics.randomizeInitial(260,280), 'block21');
        mechanics.snapToGrid(block7);

        const blocksArray = [block1, block2, block3, block4, block5, block6, block7];
        mechanics.assignDrags(blocksArray, level4State.checkPosition);
    },

        checkPosition: function() {
            if(this.block1.position.x === 440 && this.block1.position.y === 320 &&
                this.block2.position.x === 360 && this.block2.position.y === 280 &&
                this.block3.position.x === 280 && this.block3.position.y === 320 &&
                this.block4.position.x === 240 && this.block4.position.y === 280 &&
                this.block5.position.x === 520 && this.block5.position.y === 280 &&
                this.block6.position.x === 280 && this.block6.position.y === 240 &&
                this.block7.position.x === 480 && this.block7.position.y === 240) {
                mechanics.showEndgameInterface();
            }


    },


};