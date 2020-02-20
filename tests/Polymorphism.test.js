const Circle = require('../Polymorphism');

test('Polymorphism Test', () => {
    new Circle;
    expect(Circle.area(5)).toBe(78.53981633974483);
});