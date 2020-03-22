const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morse = expr.split('**********');
    let encodedMorse = '';
    
    for ( let word of morse){
        for (let i = 0; i < word.length; i += 10) {
            let symbolMorse = '';
            let symbol;
            for (let j = 0; j < 10; j += 2) {
                symbol = word[i+j] + word[i+j+1];
                if (symbol == '10') symbolMorse += '.';
                else if (symbol == '11') symbolMorse += '-';
            }
            encodedMorse += MORSE_TABLE[symbolMorse]; 
        }
        encodedMorse += ' ';
    }
    encodedMorse = encodedMorse.substr(0, encodedMorse.length-1);
    return encodedMorse;
}

module.exports = {
    decode
}
