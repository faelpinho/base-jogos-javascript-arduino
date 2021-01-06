// keyboard-listener.js - Captura os inputs do player

export default function keyboardListener(enableEventListener = false){

    // TODO ARDUINO: criar uma matriz 2x3 (5 pinos) para receber os inputs.
    // Inputs (keyCode JS/pino Arduino)
    const inputs = {
        CMD_UP    : 87, // 87 / 7
        CMD_RIGHT : 68, // 68 / 6
        CMD_DOWN  : 83, // 83 / 5
        CMD_LEFT  : 65, // 65 / 4
        CMD_A     : 97, // 97 / 3
        CMD_B     : 98  // 98 / 2
    }

    /*
    const CMD_UP    = 87;
    const CMD_RIGHT = 68;
    const CMD_DOWN  = 83;
    const CMD_LEFT  = 65;
    const CMD_A     = 97;
    const CMD_B     = 98;
    */

    if (enableEventListener == true){ document.addEventListener('keydown', waitKey); }

    function waitKey(event, context = 'EventListener'){
        var pressed_key = event.keyCode;
        var button;

        button = button || (pressed_key == inputs.CMD_UP);       // UP
        button = button || (pressed_key == inputs.CMD_RIGHT);    // RIGHT
        button = button || (pressed_key == inputs.CMD_DOWN);     // DOWN
        button = button || (pressed_key == inputs.CMD_LEFT);     // LEFT
        button = button || (pressed_key == inputs.CMD_A);        // A
        button = button || (pressed_key == inputs.CMD_B);        // B

        // Ai, Javascript... Como é que eu vou te explicar o Anarcocapitalismo?!
        return (button ? function(){
            console.debug('waitKey() = keyCode: '+pressed_key+' | Key: '+event.key+' | Context: '+context);
            return pressed_key;
        }() : void(null));

    }

    return {
        waitKey,
        inputs
    }

}

// EOF