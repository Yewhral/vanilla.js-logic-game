let level1State = {

    create: function() {

        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        //creating UI
        mechanics.createInterface();

        //Adding texts
        mechanics.createText('Level 1 - Rocket science ', 30, 5, 0, 100);

        //creating items
        const levelOne = game.add.sprite(320, 240, 'levelOne');

        const block1 = game.add.sprite(mechanics.randomizeInitial(500,600), mechanics.randomizeInitial(150,250), 'block4');
        mechanics.snapToGrid(block1);

        const block2 = game.add.sprite(mechanics.randomizeInitial(10,150), mechanics.randomizeInitial(100,250), 'block5');
        mechanics.snapToGrid(block2);

        const block3 = game.add.sprite(mechanics.randomizeInitial(10,300), mechanics.randomizeInitial(400,450), 'block6');
        mechanics.snapToGrid(block3);

        const block4 = game.add.sprite(mechanics.randomizeInitial(500,650), mechanics.randomizeInitial(400,450), 'block3');
        mechanics.snapToGrid(block4);

        const blocksArray = [block1, block2, block3, block4];
        mechanics.assignDrags(blocksArray, level1State.checkPosition);
    },

    checkPosition: function() {
        if(this.block1.position.x === 400 && this.block1.position.y === 360 &&
            this.block2.position.x === 400 && this.block2.position.y === 240 &&
            this.block3.position.x === 360 && this.block3.position.y === 280 &&
            this.block4.position.x === 320 && this.block4.position.y === 360) {
            mechanics.showEndgameInterface();
        }
    }
};