const {sum, subs, mult, div } = require('./calculator');
describe('calculator Test', () => {
    it('should sum two numbers', () => {
        const a = 1;
        const b = 5;
        expect(sum(a,b)).toBe(6);
    });

    it('should substract one number from the other one', () => {
        const a = 1;
        const b = 5;
        expect(subs(b,a)).toBe(4);
    });

    it('should multiply two numbers', () => {
        const a = 1;
        const b = 5;
        expect(mult(a, b)).toBe(5);
    });
    it('should  two numbers', () => {
        const b = 5;
        expect(div(b, b)).toBe(1);
    });
});