let scoreState = {

    create: function() {
        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        //creating UI
        let btnWidth = 120;
        let btnHeight = 40;
        let button = game.add.button(20,15,'mainMenuButton', function(){
            mechanics.counter = 0;
            game.state.start('mainMenu');
        },this,1,2,0);
        button.height = btnHeight;
        button.width = btnWidth;
        button.alpha = 0.6;
        mechanics.createText('Main menu', 14, 1, -330, 25);
        let but = game.add.button(150,15,'mainMenuButton', function(){
            scoreState.resetScores();
            game.state.start('scoreboard');
        },this,1,2,0);
        but.height = btnHeight;
        but.width = btnWidth;
        but.alpha = 0.7;
        mechanics.createText('Reset scores', 14, 1, -200, 25);


        //Adding texts
        mechanics.createText('Your best times:', 30, 5, 0, 100);

        scoreState.createScoreboard();

    },

    createScoreboard: function() {
        if(localStorage.getItem(`level-0`) !== null) {
            mechanics.createText(`Tutorial: ${localStorage.getItem(`level-0`)} s`, 20, 5, 0, 200);
        } else {
            mechanics.createText(`Tutorial: ---`, 20, 5, 0, 200);
        }

        for(let i = 1; i <= 6; i++) {
            if(localStorage.getItem(`level-${i}`) !== null){
                mechanics.createText(`Level ${i}: ${localStorage.getItem(`level-${i}`)} s`, 20, 5, 0, 200 + (40 * i));
            } else {
                mechanics.createText(`Level ${i}: ---`, 20, 5, 0, 200 + (40 * i));
            }
        }
    },

    resetScores: function() {
        for (let i = 0; i <= 6; i++) {
            if (localStorage.getItem(`level-${i}`) !== null) {
                localStorage.removeItem(`level-${i}`);
            }
        }
    }



};