import createGame from './game-business.js'; // business
import renderScreen from './render-screen.js';  // render
import keyboardListener from './keyboard-listener.js' // input

const screen = document.getElementById('display');
const display = screen.getContext('2d'); // ou Arduino_ST7735 display(dc, rst, cs);

/*
// TODO ARDUINO: criar uma matriz 2x3 (5 pinos) para receber os inputs.
// Inputs (keyCode JS/pino Arduino)
const CMD_UP    = 87; // 87 / 7
const CMD_RIGHT = 68; // 68 / 6
const CMD_DOWN  = 83; // 83 / 5
const CMD_LEFT  = 65; // 65 / 4
const CMD_A     = 97; // 97 / 3
const CMD_B     = 98; // 98 / 2
*/


// Configs
const FPS = (1000 / 30);


// Timers
var loops = 0;

var game = createGame();
var render = renderScreen(display);
var input = keyboardListener(false);

// Similar a função setup do Arduino e STM32.
function setup(){
    loop(game, render, input);
}    


// Similar a função loop do Arduino e STM32.
function loop(game, render, input){
    
    if (game.gameObj.state == 0)    // title
    {
        game.gameTitle();
        render.drawTitle();

        document.onkeydown = function(event){
            if (game.gameObj.started == false && input.waitKey(event, 'onKeyDown') === input.inputs.CMD_A){
                game.gameObj.state = 1;
                game.gameObj.started = true;
                loop(game, render, input);
            }
        };
    }else
    if (game.gameObj.state == 1)   // loop
    {
        console.log("gameLoop iniciado.");
        // Aqui temos que usar o tempo como base.
        // No MCU o loop é de fato infinito. No navegador, o loop é até onde o navegador aguentar.
        var lastLoop = new Date();
        var timer = setInterval(function(){


            game.gameLoop();
            render.drawLoop(game);
            
            /*
            var thisLoop = new Date();
            console.log('FPS in loop: ' + (1000 / (thisLoop - lastLoop)));
            lastLoop = thisLoop;
            */
            
            /*
            // if (stateChanged) clearInterval(timer);
            if (input.waitKey(event, 'onKeyDown') === input.inputs.CMD_B){
                clearInterval(timer);
                drawOver();
            }
            */

        }, FPS); // Testar 'true' numa maquina mais forte.
    }else
    if (game.gameObj.state == 2)   // over
    {
        gameOver();
        drawOver();
        //waitKeyOrTimeout(CMD_A, 5000);
        //gameInit();
    }

}


setup();

//setInterval( function(){ loop(game, render, input) } , FPS);


/*
var millis = 0;
function timer_start(){
    millis++;
    game_loop(millis);
}

function game_loop(millis){
    const SKIP_TICKS    = (1000 / 30);
    const MAX_FRAMESKIP = 1;
    let loops, next_game_tick = 0;

    //while (1){
        loops = 0;
        let move_direction = 0; // indica a direção da animação do player
        while (millis > next_game_tick && loops < MAX_FRAMESKIP){
            // ========== CAMADA DE NEGOCIOS ==========
            //
            // ========== CAMADA DE NEGOCIOS ==========
            next_game_tick += SKIP_TICKS;
            loops += 1;
        }
    //}
}

*/
