const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


function shiftPosition(letter, shiftNum) {

    let alphabetIndex = alphabet.indexOf(letter);
    let shiftedPosition = alphabetIndex + shiftNum;
    if (shiftedPosition > 26) {
        shiftedPosition = shiftedPosition - 26;

    }
    if (shiftedPosition < 0) {
        shiftedPosition = shiftedPosition + 26;
    }

    return shiftedPosition;

}



function caesarCipher(str, shiftNum) {
    let strArr = str.split('');
    let isUppercase = false;
    for (let i = 0; i < strArr.length; i++) {

        if (strArr[i] !== ' ' && alphabet.includes(strArr[i].toLowerCase())) {
            if (strArr[i] === strArr[i].toUpperCase()) {
                isUppercase = true;
                strArr[i] = strArr[i].toLowerCase();
            }
            let shiftedAmount = shiftPosition(strArr[i], shiftNum);

            strArr[i] = alphabet[shiftedAmount];
            if (isUppercase) {
                strArr[i] = strArr[i].toUpperCase();
                isUppercase = false;
            }
        }
    }
    str = strArr.join('')
    return str;
};

module.exports = caesarCipher;


