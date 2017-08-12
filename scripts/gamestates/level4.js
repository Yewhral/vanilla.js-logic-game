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
        const levelFour = game.add.sprite(220, 220, 'levelFour');

        const block1 = game.add.sprite(mechanics.randomizeInitial(10,300), mechanics.randomizeInitial(350,450), 'block3');
        mechanics.snapToGrid(block1);

        const block2 = game.add.sprite(mechanics.randomizeInitial(10,300), mechanics.randomizeInitial(350,450), 'block4');
        mechanics.snapToGrid(block2);

        const block3 = game.add.sprite(mechanics.randomizeInitial(500,700), mechanics.randomizeInitial(200,300), 'block6');
        mechanics.snapToGrid(block3);

        const block4 = game.add.sprite(mechanics.randomizeInitial(10,200), mechanics.randomizeInitial(200,300), 'block9');
        mechanics.snapToGrid(block4);

        const block5 = game.add.sprite(mechanics.randomizeInitial(10,300), mechanics.randomizeInitial(350,450), 'block13');
        mechanics.snapToGrid(block5);

        const block6 = game.add.sprite(mechanics.randomizeInitial(10,300), mechanics.randomizeInitial(350,450), 'block20');
        mechanics.snapToGrid(block6);

        const block7 = game.add.sprite(mechanics.randomizeInitial(500,700), mechanics.randomizeInitial(200,300), 'block21');
        mechanics.snapToGrid(block7);

        const blocksArray = [block1, block2, block3, block4, block5, block6, block7];
        mechanics.assignDrags(blocksArray, level4State.checkPosition);
    },

        checkPosition: function() {
            if(this.block1.position.x === 420 && this.block1.position.y === 300 &&
                this.block2.position.x === 340 && this.block2.position.y === 260 &&
                this.block3.position.x === 260 && this.block3.position.y === 300 &&
                this.block4.position.x === 220 && this.block4.position.y === 260 &&
                this.block5.position.x === 500 && this.block5.position.y === 260 &&
                this.block6.position.x === 260 && this.block6.position.y === 220 &&
                this.block7.position.x === 460 && this.block7.position.y === 220) {
                mechanics.showEndgameInterface();
            }


    },


};