let level3State = {

    create: function() {
        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        //creating UI
        mechanics.createInterface();

        //Adding texts
        mechanics.createText('Level 3 - Elixir ', 30, 5, 0, 100);


        const levelThree = game.add.sprite(260, 220, 'levelThree');

        const block1 = game.add.sprite(mechanics.randomizeInitial(10,100), mechanics.randomizeInitial(200,280), 'block4');
        mechanics.snapToGrid(block1);

        const block2 = game.add.sprite(mechanics.randomizeInitial(550,660), mechanics.randomizeInitial(280,310), 'block5');
        mechanics.snapToGrid(block2);

        const block3 = game.add.sprite(mechanics.randomizeInitial(500,680), mechanics.randomizeInitial(80,160), 'block14');
        mechanics.snapToGrid(block3);

        const block4 = game.add.sprite(mechanics.randomizeInitial(10,50), mechanics.randomizeInitial(100,150), 'block17');
        mechanics.snapToGrid(block4);

        const block5 = game.add.sprite(mechanics.randomizeInitial(550,660), mechanics.randomizeInitial(425,440), 'block18');
        mechanics.snapToGrid(block5);

        const block6 = game.add.sprite(mechanics.randomizeInitial(10,100), mechanics.randomizeInitial(350,450), 'block19');
        mechanics.snapToGrid(block6);

        const blocksArray = [block1, block2, block3, block4, block5, block6];
        mechanics.assignDrags(blocksArray, level3State.checkPosition);
    },

        checkPosition: function() {
            if(this.block1.position.x === 340 && this.block1.position.y === 220 &&
                this.block2.position.x === 460 && this.block2.position.y === 340 &&
                this.block3.position.x === 380 && this.block3.position.y === 300 &&
                this.block4.position.x === 300 && this.block4.position.y === 420 &&
                this.block5.position.x === 300 && this.block5.position.y === 300 &&
                this.block6.position.x === 260 && this.block6.position.y === 380) {
                mechanics.showEndgameInterface();
            }

    },


};