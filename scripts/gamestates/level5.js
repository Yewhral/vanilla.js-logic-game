let level5State = {

    create: function() {
        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        //creating UI
        mechanics.createInterface();

        //Adding texts
        mechanics.createText('Level 5 - CoffeeScript', 30, 5, 0, 100);

        const levelFive = game.add.sprite(280, 200, 'levelFive');

        const block1 = game.add.sprite(mechanics.randomizeInitial(10,200), mechanics.randomizeInitial(380,400), 'block7');
        mechanics.snapToGrid(block1);

        const block2 = game.add.sprite(mechanics.randomizeInitial(320,420), mechanics.randomizeInitial(470,480), 'block8');
        mechanics.snapToGrid(block2);

        const block3 = game.add.sprite(mechanics.randomizeInitial(180,220), mechanics.randomizeInitial(200,300), 'block9');
        mechanics.snapToGrid(block3);

        const block4 = game.add.sprite(mechanics.randomizeInitial(10,200), mechanics.randomizeInitial(80,120), 'block10');
        mechanics.snapToGrid(block4);

        const block5 = game.add.sprite(mechanics.randomizeInitial(600,660), mechanics.randomizeInitial(380,400), 'block11');
        mechanics.snapToGrid(block5);

        const block6 = game.add.sprite(mechanics.randomizeInitial(560,660), mechanics.randomizeInitial(80,100), 'block12');
        mechanics.snapToGrid(block6);

        const block7 = game.add.sprite(mechanics.randomizeInitial(600,680), mechanics.randomizeInitial(220,240), 'block13');
        mechanics.snapToGrid(block7);

        const block8 = game.add.sprite(mechanics.randomizeInitial(10,80), mechanics.randomizeInitial(220,260), 'block14');
        mechanics.snapToGrid(block8);

        const blocksArray = [block1, block2, block3, block4, block5, block6, block7, block8];
        mechanics.assignDrags(blocksArray, level5State.checkPosition);
    },

    checkPosition: function() {
        if(this.block1.position.x === 320 && this.block1.position.y === 280 &&
            this.block2.position.x === 320 && this.block2.position.y === 240 &&
            this.block3.position.x === 280 && this.block3.position.y === 280 &&
            this.block4.position.x === 280 && this.block4.position.y === 200 &&
            this.block5.position.x === 280 && this.block5.position.y === 360 &&
            this.block6.position.x === 400 && this.block6.position.y === 200 &&
            this.block7.position.x === 400 && this.block7.position.y === 320 &&
            this.block8.position.x === 480 && this.block8.position.y === 240) {
            mechanics.showEndgameInterface();
        }
    },


};