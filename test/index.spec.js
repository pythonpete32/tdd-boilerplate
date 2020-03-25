const index = require('../src/index');

describe('hello', () => {
    it('should reuturn hello', () => {
        expect(index.hello()).toBe("hello")
    });
});