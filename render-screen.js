// render-screen.js - renderiza os frames no browser. No MCU, desenha os pixels.

export default function renderScreen(display){

    const COLOR_BLACK   = '#000000';
    const COLOR_WHITE   = '#FFFFFF';
    const COLOR_RED     = '#e60c0c';
    const COLOR_BLUE    = '#2980b9';

    const screen = {
        width: 160,
        height: 128
    }



    function drawTitle(){
        // !! Não chamar fillScreen() em cada execução de renderScreen no MCU para evitar a extrema queda de performance !!
        fillScreen(COLOR_BLACK);
        fillText("NomeDoApp");
    }



    function drawLoop(game){
        let gameObj = game.gameObj;
        let player = gameObj.player;
        fillScreen(COLOR_BLACK);
        fillRect(player.x, player.y, player.sprite_size.width, player.sprite_size.height, COLOR_RED);
        fillText("Em loop: " + player.test);
    }



    function drawOver(){
        fillText("Game Over", COLOR_RED);
    }


    // ========== Funções privadas ==========

    function fillScreen(color = '#000000'){
        display.fillStyle = color;
        display.fillRect(0, 0, screen.width, screen.height); // clearRect() não aceita cor.
    }



    function fillRect(x, y, w = screen.width, h = screen.height, color = COLOR_WHITE){
        display.fillStyle = color;
        display.fillRect(x, y, w, h);
    }



    function fillText(text, color = COLOR_BLUE, x = screen.width/2, y = screen.height/2, font = "14px Arial", align = "center"){
        display.font = font;
        display.fillStyle = color;
        display.textAlign = align;
        display.fillText(text, x, y);
    }



    function drawImage(x, y, w, h, image){
        throw "Not Implemented";
    }



    return {
        // Public
        screen,
        drawTitle,
        drawLoop,
        drawOver,
        

        // Private
        fillScreen,
        fillRect,
        fillText,
        drawImage
    }

};


// EOF