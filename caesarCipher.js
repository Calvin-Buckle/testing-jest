let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
];

function Encryption(string, key) {
    let encrypted = '';

    for (let i = 0; i < string.length; i++) {
        let char = string[i].toUpperCase();
        if (alpha.includes(char)) {
            let index = alpha.indexOf(char);
            let newIndex = (index + key) % 26;

            if (string[i] === string[i].toUpperCase()) {
                encrypted += alpha[newIndex];
            } else {
                encrypted += alpha[newIndex].toLowerCase();
            }
        } else {
            encrypted += string[i];
        }
    }
    return encrypted;
}

function Decryption(string, key) {
    let decrypted = '';

    for (let i = 0; i < string.length; i++) {
        let char = string[i].toUpperCase();
        if (alpha.includes(char)) {
            let index = alpha.indexOf(char);
            let newIndex = (index - key + 26) % 26; // Adding 26 to handle negative numbers properly

            if (string[i] === string[i].toUpperCase()) {
                decrypted += alpha[newIndex];
            } else {
                decrypted += alpha[newIndex].toLowerCase();
            }
        } else {
            decrypted += string[i];
        }
    }
    return decrypted;
}

module.exports = { Encryption, Decryption };
