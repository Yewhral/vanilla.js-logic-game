let level1State = {

    create: function() {
        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        const levelOne = game.add.sprite(300, 220, 'levelOne');

        //Adding texts
        mechanics.createText('Level 1 - Rocket science ', 30, 5, 0, 100);


        const block1 = game.add.sprite(mechanics.randomizeInitial(500,700), mechanics.randomizeInitial(200,300), 'block4');
        mechanics.snapToGrid(block1);

        const block2 = game.add.sprite(mechanics.randomizeInitial(10,200), mechanics.randomizeInitial(200,300), 'block5');
        mechanics.snapToGrid(block2);

        const block3 = game.add.sprite(mechanics.randomizeInitial(10,300), mechanics.randomizeInitial(350,450), 'block6');
        mechanics.snapToGrid(block3);

        const block4 = game.add.sprite(mechanics.randomizeInitial(10,300), mechanics.randomizeInitial(350,450), 'block3');
        mechanics.snapToGrid(block4);

        const blocksArray = [block1, block2, block3, block4];
        mechanics.assignDrags(blocksArray, level1State.checkPosition);
    },

    checkPosition: function() {
        if(this.block1.position.x === 380 && this.block1.position.y === 340 &&
            this.block2.position.x === 380 && this.block2.position.y === 220 &&
            this.block3.position.x === 340 && this.block3.position.y === 260 &&
            this.block4.position.x === 300 && this.block4.position.y === 340) {
            console.log('YOU WIN!');

        }
    }
};