const analyzeArray = require('./analyzeArray')


test('returns the average of an array of numbers', () => {
    expect(analyzeArray.average([1,5,2,6,3,7,8,9])).toBe(5.125)
})

test('returns the min of an array of numbers', () => {
    expect(analyzeArray.min([1,5,2,6,3,7,8,9])).toBe(1)
})

test('returns the max of an array of numbers', () => {
    expect(analyzeArray.max([1,5,2,6,3,7,8,9])).toBe(9)
})

test('returns the length of an array of numbers', () => {
    expect(analyzeArray.length([1,5,2,6,3,7,8,9])).toBe(8)
})