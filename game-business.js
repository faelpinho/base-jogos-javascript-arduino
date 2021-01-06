// game-business.js - Regra de negócio do jogo.

// Constantes (keyCode js/pino Arduino)
// TODO ARDUINO: criar uma matriz 2x3 (5 pinos) para receber os inputs.




export default function createGame(){

    const gameObj = {
        state: 0,           // 0: title, 1: loop, 2: over
        started: false,
        debug: false,       // desenha objetos que ajudarão no alinhamento e informações no console
        player: {
            x: 10,
            y: 10,
            test: 0,
            sprite_size: {
                width: 10,
                height: 10
            }
        },
        collectables: {}
    }



    function gameTitle(){
        // gameObj.state = 0;
        
    }



    function gameLoop(){
        // gameObj.state = 1;
        let player = gameObj.player;
        player.test++;
        
        if (player.test % 2 == 0){
            if (player.x <= screen.height){
                player.x++;
            }else{
            //if (player.x > 0){
                player.x--;
            }

        }
    }



    function gameOver(){
        // gameObj.state = 2;
    }



    return {
        gameObj,
        gameTitle,
        gameLoop,
        gameOver
    }

};


// EOF