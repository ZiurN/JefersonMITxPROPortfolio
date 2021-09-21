const Greet = require('./greetings');
describe('Greetings Test', () => {
    it('should return a greeting with the given name', () => {
        expect(Greet('Jeferson')).toBe('Hello!! Jeferson');
    });
    it('should return a general greeting if name is null', () => {
        expect(Greet(null)).toBe('Hello!! stranger');
    });
    it('should return a shouting if name is in uppercase', () => {
        expect(Greet('JEFERSON')).toBe('HELLO!! JEFERSON');
    });
    it('should return a greeting for a list of 2 names', () => {
        expect(Greet(['Jeferson', 'Jhonatan'])).toBe('Hello!! Jeferson, Jhonatan');
    });
    it('should return a greeting for an array names', () => {
        expect(Greet(['Alex','Arsene','Jose','Zidane'])).toBe('Hello!! Alex, Arsene, Jose, Zidane');
    });
});