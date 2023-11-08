const calculator = require('./calculator.js')

test('3 Plus 2', () =>{
    expect(calculator.add(3,2)).toEqual(5)
})

test('10 minus 5', () => {
    expect(calculator.minus(10,5)).toEqual(5)
})

test('10 devided by 2', () => {
    expect(calculator.devide(10,2)).toEqual(5)
})

test('2 times 5', () => {
    expect(calculator.times(2,5)).toEqual(10)
})