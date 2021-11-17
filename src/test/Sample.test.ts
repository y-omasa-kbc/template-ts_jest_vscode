import { Sample } from '../app/Sample'


describe('Sample test suite', ()=>{
    test('first test', ()=>{
        const result = Sample.hello();
        expect(result).toBe("Hello, Typescript!");
    });

});