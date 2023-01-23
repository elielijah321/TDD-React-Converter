import { convertCurrency, convertToFahrenheit } from '../functions/converterFunctions';

describe('test currency converter', () => {

    test('expect amount of 10 and value of 10 should result in 100', () => {

        //assemble 
        const amount = 10;
        const value = 10;
        const expectedResult = 100;

        //act 
        let result = convertCurrency(amount, value);

        //assert
        expect(result).toBe(expectedResult);
    });

    test('expect amount of 7 and value of 8 should result in 56', () => {

        //assemble 
        const amount = 7;
        const value = 8;
        const expectedResult = 56;

        //act 
        let result = convertCurrency(amount, value);

        //assert
        expect(result).toBe(expectedResult);
    });

    test('expect amount of 12 and value of 14 should result in 168', () => {

        //assemble 
        const amount = 12;
        const value = 14;
        const expectedResult = 168;

        //act 
        let result = convertCurrency(amount, value);

        //assert
        expect(result).toBe(expectedResult);
    });
})


describe('test celcius converter', () => {

    test('expect celcius of 0 to be converted to 32', () => {

        //assemble 
        const celcius = 0;
        const expectedResult = 32;

        //act 
        let result = convertToFahrenheit(celcius);

        //assert
        expect(result).toBe(expectedResult);
    });

    test('expect celcius of 1 to be converted to 33.8', () => {

        //assemble 
        const celcius = 1;
        const expectedResult = 33.8;

        //act 
        let result = convertToFahrenheit(celcius);

        //assert
        expect(result).toBe(expectedResult);
    });

    test('expect celcius of 1 to be converted to 60.8', () => {

        //assemble 
        const celcius = 16;
        const expectedResult = 60.8;

        //act 
        let result = convertToFahrenheit(celcius);

        //assert
        expect(result).toBe(expectedResult);
    });
})