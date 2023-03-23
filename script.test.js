const capitalize = require("./capitalize");
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caesarCipher = require('./caesarCipher');
const analyseArray = require('./analyseArray');

const arr = [8,3,4,2,6,1];

const returnedObj = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};


test('takes string testing and returns Testing', () => {
    expect(capitalize('testing')).toBe('Testing');
});

test('recieves string reverse and returns esrever', () => {
    expect(reverseString('reverse')).toBe('esrever');
});

test('recieves 6 and 2 and returns 8', () => {
    expect(calculator.add(6, 2)).toBe(8);
});

test('recieves 6 and 2 and returns 4', () => {
    expect(calculator.subtract(6, 2)).toBe(4);
});

test('recieves 6 and 2 and returns 12', () => {
    expect(calculator.multiply(6, 2)).toBe(12);
});

test('recieves 6 and 2 and returns 3', () => {
    expect(calculator.divide(6, 2)).toBe(3);
});

test('recieves string animal and returns bojnbm', () => {
    expect(caesarCipher('animal', 1)).toBe('bojnbm');
});

test('test caesarCipher for a and z', () => {
    expect(caesarCipher('animal', -1)).toBe('zmhlzk');
});

test('test caesarCipher for multiple words', () => {
    expect(caesarCipher('animals are fun', 1)).toBe('bojnbmt bsf gvo');
});

test('test caesarCipher for punctuation', () => {
    expect(caesarCipher('animals are fun!', 1)).toBe('bojnbmt bsf gvo!');
});

test('test caesarCipher for uppercase', () => {
    expect(caesarCipher('Animals are fun', 1)).toBe('Bojnbmt bsf gvo');
});



test('Tests analyseArray with array not containing all numbers and should throw an error', () => {
    expect(() => {analyseArray([1, 4, 3, 'one'])}).toThrow(Error);
})

test('test analyseArr average function', () => {
    expect(analyseArray(arr)).toHaveProperty('average', 4,);
})

test('test analyseArr min function', () => {
    expect(analyseArray(arr)).toHaveProperty('min', 1);
})

test('test analyseArr max function', () => {
    expect(analyseArray(arr)).toHaveProperty('max', 8);
})

test('test analyseArr length function', () => {
    expect(analyseArray(arr)).toHaveProperty('length', 6);
})

test('recieves array arr and returns object with average, min, max, length', () => {
    expect(analyseArray(arr)).toEqual(returnedObj);
})