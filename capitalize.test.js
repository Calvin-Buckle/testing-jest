const capitalize = require('./capitalize');

test('Capitalizes first letter', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});
