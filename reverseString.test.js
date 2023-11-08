const reverseString = require('./reverseString')

test('Reverses the String', () => {
 expect(reverseString('hello world')).toBe('dlrow olleh')
})