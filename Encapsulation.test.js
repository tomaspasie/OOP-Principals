const Encapsulation = require('./Encapsulation');

test('Encapsulation Test', () => {
    expect(firstDog.name()).toBe("The dog is named Zed.");
    expect(firstDog.breed()).toBe("The breed of the dog is English Bull Terrier.");
});