const {Encryption, Decryption} = require('./caesarCipher')


test('turns a string into a caeserCipher', () => {
    expect(Encryption('Hello World', 3)).toBe('Khoor Zruog')
})


test('decrypts the provided string', () => {
    expect(Decryption('Khoor Zruog',3)).toBe('Hello World')
})