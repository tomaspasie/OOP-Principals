let Triangle = function(){}
Triangle.area = function(b,h){
    return (b*h)/2;
}

let Circle = function(){}
Circle.area = function(r){
    return (Math.PI*Math.pow(r,2));
}

let Rectangle = function(){}
Rectangle.area = function(l,w){
    return (l*w);
}

new Triangle;
new Circle;
new Rectangle;

console.log(Triangle.area(5,5));
console.log(Circle.area(5));
console.log(Rectangle.area(5,5));