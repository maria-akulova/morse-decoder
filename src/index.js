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
    let pattern = new RegExp(/.{10}/g);
    let splittedArray  = [];
    splittedArray = expr.match(pattern);
    for (let i = 0; i < splittedArray.length; i++) {   
        let morseStr = "";
        let temp = "";     
        if (splittedArray[i] === "**********") {
            morseStr = " ";
        } else {
            temp = Array.from(splittedArray[i]).reverse();
            for (let j = 0; j<temp.length; j+=2) { 
                if (temp[j+1] !== undefined && (temp[j]+temp[j+1] !== "00"  ))  {
                    morseStr+= (temp[j] === temp[j+1]) ? "-" : ".";
                } else if (temp[j] === "1") {
                    console.log("ERROR!");
                }      
            }
        }        
        splittedArray[i] = morseStr.split("").reverse().join("");
    }
    for (let k = 0; k<splittedArray.length; k++) {
        splittedArray[k] = MORSE_TABLE[splittedArray[k]];
        if (splittedArray[k] === undefined) {
            splittedArray[k] = " ";
        }
    }
    return splittedArray.join("");;
}

module.exports = {
    decode
}