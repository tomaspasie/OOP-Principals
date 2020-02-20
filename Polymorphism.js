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

module.exports = Circle;