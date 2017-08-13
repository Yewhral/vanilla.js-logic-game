let scoreState = {

    create: function() {
        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        //creating UI
        let btnWidth = 120;
        let btnHeight = 40;
        let button = game.add.button(10,15,'mainMenuButton', function(){
            mechanics.counter = 0;
            game.state.start('mainMenu');
        },this,1,2,0);
        button.height = btnHeight;
        button.width = btnWidth;
        button.alpha = 0.6;
        mechanics.createText('Main menu', 14, 1, -330, 25);

        //Adding texts
        mechanics.createText('Your best times:', 30, 5, 0, 100);

        mechanics.createText(`Tutorial: ${localStorage.getItem('level-1')}`, 20, 5, 0, 200);

        scoreState.createScoreboard();



    },

    createScoreboard: function(){
        for(let i = 1; i <= 6; i++) {
            if(localStorage.getItem(`level-${i}`) !== null){
                mechanics.createText(`Level ${i}: ${localStorage.getItem(`level-${i}`)}`, 20, 5, 0, 200 + (40 * i));
            } else {
                mechanics.createText(`Level ${i}: ---`, 20, 5, 0, 200 + (40 * i));
            }
        }
    }

};