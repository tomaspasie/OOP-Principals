const Dog = require('../Encapsulation');

test('Encapsulation Test', () => {
    const firstDog = new Dog ("Zed","English Bull Terrier");
    expect(firstDog.name()).toBe("Zed");
    expect(firstDog.breed()).toBe("English Bull Terrier");
});