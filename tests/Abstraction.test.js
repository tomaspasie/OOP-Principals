const Dog = require('../Abstraction');

test('Abstraction Test', () => {
    const firstDog = new Dog ('Zed',"English Bull Terrier");
    expect(firstDog.dogInfo()).toBe("Zed English Bull Terrier");
});